import { createContext, useContext, useEffect, useState } from "react";

import type { ReactNode } from "react";

import type { Transaction } from "../types/transaction";

import { useAuth } from "./AuthContext";
import { useUser } from "./UserContext";

import { getTransactions } from "../api/transactionApi";

interface TransactionContextType {
  transactions: Transaction[];

  fetchTransactions: () => Promise<void>;

  addTransaction: (transaction: Transaction) => void;
}

const TransactionContext = createContext<TransactionContextType | null>(null);

interface Props {
  children: ReactNode;
}

export function TransactionProvider({ children }: Props) {
  const { token } = useAuth();

  const { accountNumber } = useUser();

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions() {
    if (!token) return;

    try {
      const data = await getTransactions(accountNumber, token);

      const mappedTransactions: Transaction[] = data.map(
        (transaction, index) => ({
          id: index.toString(),

          referenceId: transaction.referenceId,

          description: transaction.description,

          amount: transaction.amount,

          type: transaction.type as "TRANSFER",

          status: transaction.status as "SUCCESS" | "FAILED",

          date: new Date(transaction.createdAt).toLocaleDateString("en-MY"),

          createdAt: transaction.createdAt,
        }),
      );

      setTransactions(mappedTransactions);
      removeEventListener;
    } catch (error) {
      console.error("Failed fetch transactions", error);
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, [token]);

  function addTransaction(transaction: Transaction) {
    setTransactions((previous) => [transaction, ...previous]);
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions,

        fetchTransactions,

        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction() {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error("useTransaction must be inside TransactionProvider");
  }

  return context;
}
