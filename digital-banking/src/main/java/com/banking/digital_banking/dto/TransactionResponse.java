package com.banking.digital_banking.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TransactionResponse {

    private String referenceId;

    private String description;

    private double amount;

    private String type;

    private String status;

    private LocalDateTime createdAt;

}