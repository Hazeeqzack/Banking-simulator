export interface Transaction {
  id: string;

  referenceId: string;

  date: string;

  description: string;

  amount: number;

  type: "TRANSFER";

  status: "SUCCESS" | "FAILED";

  createdAt?: string;
}
