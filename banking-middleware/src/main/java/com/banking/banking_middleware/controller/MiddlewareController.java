package com.banking.banking_middleware.controller;

import com.banking.banking_middleware.dto.TransferRequest;
import com.banking.banking_middleware.dto.TransferResponse;
import com.banking.banking_middleware.service.BackendClientService;
import jakarta.validation.Valid;
import org.apache.camel.ProducerTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/middleware")
public class MiddlewareController {


//    private final BackendClientService backendClientService;
    private final ProducerTemplate producerTemplate;


//    public MiddlewareController(
//            BackendClientService backendClientService
//    ){
//
//        this.backendClientService = backendClientService;
//
//    }

    public MiddlewareController(
            ProducerTemplate producerTemplate
    ){

        this.producerTemplate = producerTemplate;

    }


    @PostMapping("/transfer")
    public TransferResponse transfer(
            @Valid @RequestBody TransferRequest request
    ) throws InterruptedException {

        String transactionId =
                "TX-" + UUID.randomUUID()
                        .toString()
                        .substring(0, 8);


        System.out.println("===== TRANSFER REQUEST =====");
        System.out.println("Transaction ID : " + transactionId);
        System.out.println("From Account   : " + request.getFromAccount());
        System.out.println("To Account     : " + request.getToAccount());
        System.out.println("Amount         : " + request.getAmount());


//        String backendResponse =
//                backendClientService.processTransfer(request);
        String backendResponse =
                producerTemplate.requestBody(
                        "direct:transfer",
                        request,
                        String.class
                );

        Thread.sleep(10000);


        return new TransferResponse(
                transactionId,
                "SUCCESS",
                backendResponse
        );

    }

}