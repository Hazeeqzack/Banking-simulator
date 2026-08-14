import type {
    Transaction
} from "../types/transaction";



export const transactions: Transaction[] = [


    {
        id:"TX001",
        date:"21 Jul 2026",
        description:"Salary Credit",
        amount:"RM5000",
        type:"CREDIT",
        status:"SUCCESS"
    },


    {
        id:"TX002",
        date:"20 Jul 2026",
        description:"JomPAY Payment",
        amount:"RM120",
        type:"DEBIT",
        status:"SUCCESS"
    },


    {
        id:"TX003",
        date:"19 Jul 2026",
        description:"Fund Transfer",
        amount:"RM500",
        type:"DEBIT",
        status:"FAILED"
    }


];