package com.banking.digital_banking.service;

import com.banking.digital_banking.dto.AccountResponse;
import com.banking.digital_banking.entity.Account;
import com.banking.digital_banking.exception.AccountNotFoundException;
import com.banking.digital_banking.repository.AccountRepository;

import org.springframework.stereotype.Service;


@Service
public class AccountService {


    private final AccountRepository accountRepository;



    public AccountService(AccountRepository accountRepository){

        this.accountRepository = accountRepository;

    }



    public AccountResponse getAccount(String accountNumber){


        Account account = accountRepository
                .findByAccountNumber(accountNumber)
                .orElseThrow(
                        () -> new AccountNotFoundException("Sender account not found")
                );


        AccountResponse response = new AccountResponse();


        response.setAccountNumber(
                account.getAccountNumber()
        );


        response.setBalance(
                account.getBalance()
        );


        response.setCurrency(
                account.getCurrency()
        );


        response.setStatus(
                account.getStatus()
        );


        return response;

    }

}
