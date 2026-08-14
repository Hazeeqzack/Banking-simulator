package com.banking.banking_middleware.dto;


import lombok.Data;

@Data
public class TransferMessage {


    private String transactionId;

    private String correlationId;

    private String sourceSystem;

    private String timestamp;

    private TransferRequest transferDetails;


}