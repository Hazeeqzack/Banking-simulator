package com.banking.digital_banking.service;


import com.banking.digital_banking.dto.TransactionResponse;
import com.banking.digital_banking.entity.Transaction;
import com.banking.digital_banking.repository.TransactionRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {


    private final TransactionRepository transactionRepository;


    public TransactionService(
            TransactionRepository transactionRepository
    ){
        this.transactionRepository = transactionRepository;
    }



    public List<TransactionResponse> getTransactions(
            String accountNumber
    ){

        return transactionRepository
                .findByAccountAccountNumber(accountNumber)
                .stream()
                .map(transaction -> {

                    TransactionResponse response =
                            new TransactionResponse();

                    response.setReferenceId(
                            transaction.getReferenceId()
                    );

                    response.setDescription(
                            transaction.getDescription()
                    );

                    response.setAmount(
                            transaction.getAmount()
                    );

                    response.setType(
                            transaction.getType()
                    );

                    response.setStatus(
                            transaction.getStatus()
                    );

                    response.setCreatedAt(
                            transaction.getCreatedAt()
                    );

                    return response;

                })
                .toList();

    }

}