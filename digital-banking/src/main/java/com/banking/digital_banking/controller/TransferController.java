package com.banking.digital_banking.controller;

import com.banking.digital_banking.dto.TransferRequest;
import com.banking.digital_banking.dto.TransferResponse;
import com.banking.digital_banking.service.TransferService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/transfers")
public class TransferController {

    private final TransferService transferService;

    public TransferController(TransferService transferService) {
        this.transferService = transferService;
    }

    @PostMapping
    public TransferResponse transfer(
            @Valid @RequestBody TransferRequest request,
            @RequestHeader(
                    value = "X-Correlation-Id",
                    required = false
            ) String correlationId
    ) {
        return transferService.transfer(
                request,
                correlationId
        );
    }
}