package com.banking.digital_banking.exception;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ApiError {

    private LocalDateTime timestamp;

    private int status;

    private String message;

    private String path;

}
