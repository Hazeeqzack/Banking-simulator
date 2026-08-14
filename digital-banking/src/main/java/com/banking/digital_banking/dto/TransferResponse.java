package com.banking.digital_banking.dto;

import lombok.Data;


@Data
public class TransferResponse {


    private String message;

    private String status;

    private double amount;


}
