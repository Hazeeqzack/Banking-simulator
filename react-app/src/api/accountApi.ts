import axios from "axios";

const API_URL = "http://localhost:8080/api/accounts";

export interface AccountResponse {
  accountNumber: string;

  balance: number;

  currency: string;

  status: string;
}

export async function getAccount(
  accountNumber: string,
  token: string,
): Promise<AccountResponse> {
  const response = await axios.get(`${API_URL}/${accountNumber}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
