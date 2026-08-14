package com.banking.digital_banking.dto;

import lombok.Data;


@Data
public class AccountResponse {


    private String accountNumber;

    private double balance;

    private String currency;

    private String status;


}
