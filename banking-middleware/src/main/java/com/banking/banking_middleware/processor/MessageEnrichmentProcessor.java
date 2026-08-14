package com.banking.banking_middleware.processor;


import com.banking.banking_middleware.dto.TransferMessage;
import com.banking.banking_middleware.dto.TransferRequest;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;

import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.UUID;


@Component
public class MessageEnrichmentProcessor implements Processor {


    @Override
    public void process(Exchange exchange)
            throws Exception {


        TransferRequest request =
                exchange.getIn()
                        .getBody(
                                TransferRequest.class
                        );


        String transactionId =
                "TX-" +
                        UUID.randomUUID()
                                .toString()
                                .substring(0,8);


        String correlationId =
                exchange.getIn()
                        .getHeader(
                                "CorrelationId",
                                String.class
                        );


        TransferMessage message =
                new TransferMessage();


        message.setTransactionId(
                transactionId
        );


        message.setCorrelationId(
                correlationId
        );


        message.setSourceSystem(
                "INTERNET_BANKING"
        );


        message.setTimestamp(
                LocalDateTime.now()
                        .toString()
        );


        message.setTransferDetails(
                request
        );


        exchange.getIn()
                .setBody(message);


    }

}
