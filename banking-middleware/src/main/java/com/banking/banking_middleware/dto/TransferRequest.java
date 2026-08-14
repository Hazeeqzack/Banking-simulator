package com.banking.banking_middleware.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.Data;


@Data
public class TransferRequest {


    @NotBlank
    private String fromAccount;


    @NotBlank
    private String toAccount;


    @Positive
    private double amount;


    private String description;

}