import api from "./axios";

interface TransferResponse {
  message: string;

  status: string;

  amount: number;
}

export async function transferMoney(body: {
  fromAccount: string;

  toAccount: string;

  amount: number;

  description: string;
}): Promise<TransferResponse> {
  const response = await api.post("/transfers", body);

  return response.data;
}
