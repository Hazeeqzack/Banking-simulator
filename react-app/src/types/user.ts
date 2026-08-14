export interface User {

    id: string;

    name: string;

    role: string,

    email: string;

    phone: string;

    accountNumber: string;

    accountType: string;

    balance: number;

    currency: string;

    status: "ACTIVE" | "BLOCKED";

}