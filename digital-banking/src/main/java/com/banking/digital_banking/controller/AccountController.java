package com.banking.digital_banking.controller;

import com.banking.digital_banking.dto.AccountResponse;
import com.banking.digital_banking.service.AccountService;

import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/accounts")
public class AccountController {



    private final AccountService accountService;



    public AccountController(AccountService accountService){

        this.accountService = accountService;

    }




    @GetMapping("/{accountNumber}")
    public AccountResponse getAccount(
            @PathVariable String accountNumber
    ){

        return accountService.getAccount(accountNumber);

    }

}
