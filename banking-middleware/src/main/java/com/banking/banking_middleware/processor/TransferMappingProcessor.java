package com.banking.banking_middleware.processor;

import com.banking.banking_middleware.dto.TransferMessage;
import com.banking.banking_middleware.dto.TransferRequest;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;

import org.springframework.stereotype.Component;


@Component
public class TransferMappingProcessor implements Processor {


    @Override
    public void process(Exchange exchange)
            throws Exception {


        TransferMessage message =
                exchange.getIn()
                        .getBody(
                                TransferMessage.class
                        );


        TransferRequest request =
                message.getTransferDetails();


        exchange.getIn()
                .setBody(request);


        System.out.println(
                "===== MESSAGE TRANSFORMATION ====="
        );

        System.out.println(
                "Transaction ID : "
                        + message.getTransactionId()
        );

        System.out.println(
                "Correlation ID : "
                        + message.getCorrelationId()
        );

        System.out.println(
                "Backend Payload : "
                        + request
        );

    }

}
