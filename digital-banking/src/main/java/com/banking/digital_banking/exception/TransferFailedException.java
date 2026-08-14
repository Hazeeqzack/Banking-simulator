package com.banking.digital_banking.exception;

public class TransferFailedException extends RuntimeException {

    public TransferFailedException(String message) {
        super(message);
    }
}
