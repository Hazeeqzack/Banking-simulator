package com.banking.digital_banking.controller;


import com.banking.digital_banking.dto.TransactionResponse;
import com.banking.digital_banking.service.TransactionService;

import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api/accounts")
public class TransactionController {


    private final TransactionService transactionService;



    public TransactionController(
            TransactionService transactionService
    ) {

        this.transactionService = transactionService;

    }




    @GetMapping("/{accountNumber}/transactions")
    public List<TransactionResponse> getTransactions(
            @PathVariable String accountNumber
    ) {


        return transactionService
                .getTransactions(accountNumber);

    }

}