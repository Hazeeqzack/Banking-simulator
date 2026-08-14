package com.banking.digital_banking.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

import lombok.Data;


@Data
public class TransferRequest {


    @NotBlank(message = "Sender account is required")
    private String fromAccount;

    @NotBlank(message = "Receiver account is required")
    private String toAccount;

    @Positive(message = "Amount must be greater than 0")
    private double amount;

    @NotBlank(message = "Description is required")
    private String description;



}
