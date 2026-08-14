package com.banking.banking_middleware.processor;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.springframework.stereotype.Component;

import java.util.UUID;


@Component
public class CorrelationIdProcessor implements Processor {


    @Override
    public void process(Exchange exchange) throws Exception {


        String correlationId =
                "CORR-" +
                        UUID.randomUUID()
                                .toString()
                                .substring(0,8);


        exchange.getIn()
                .setHeader(
                        "CorrelationId",
                        correlationId
                );


        System.out.println(
                "Correlation ID : "
                        + correlationId
        );

    }

}
