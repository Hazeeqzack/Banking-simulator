import api from "./axios";

export interface TransactionResponse {
  referenceId: string;

  description: string;

  amount: number;

  type: string;

  status: string;

  createdAt: string;
}

export async function getTransactions(
  accountNumber: string,
  token: string,
): Promise<TransactionResponse[]> {
  const response = await api.get(`/accounts/${accountNumber}/transactions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
