import { createContext, useContext, useEffect, useState } from "react";

import type { ReactNode } from "react";

import { useAuth } from "./AuthContext";

import { getAccount } from "../api/accountApi";

interface UserContextType {
  name: string;

  accountNumber: string;

  balance: number;

  currency: string;

  status: string;

  fetchAccount: () => Promise<void>;
}

const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const { token } = useAuth();

  const [name] = useState("Hazeeq");

  const [accountNumber] = useState("1234567890");

  const [balance, setBalance] = useState(0);

  const [currency, setCurrency] = useState("");

  const [status, setStatus] = useState("");

  async function fetchAccount() {
    if (!token) {
      return;
    }

    try {
      const account = await getAccount(accountNumber, token);

      setBalance(account.balance);

      setCurrency(account.currency);

      setStatus(account.status);
    } catch (error) {
      console.error("Failed fetch account", error);
    }
  }

  useEffect(() => {
    fetchAccount();
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        name,

        accountNumber,

        balance,

        currency,

        status,

        fetchAccount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be inside UserProvider");
  }

  return context;
}
