package com.banking.banking_middleware.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TransferResponse {

    private String transactionId;
    private String status;
    private String message;

}
