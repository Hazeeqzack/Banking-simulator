package com.banking.banking_middleware.processor;


import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.springframework.stereotype.Component;


@Component
public class LoggingProcessor implements Processor {


    @Override
    public void process(Exchange exchange)
            throws Exception {


        Object body =
                exchange.getIn()
                        .getBody();


        String correlationId =
                exchange.getIn()
                        .getHeader(
                                "CorrelationId",
                                String.class
                        );


        System.out.println(
                "=========================="
        );

        System.out.println(
                "BANKING MIDDLEWARE LOG"
        );

        System.out.println(
                "Correlation ID : "
                        + correlationId
        );

        System.out.println(
                "Request Body   : "
                        + body
        );

        System.out.println(
                "Status         : PROCESSING"
        );

        System.out.println(
                "=========================="
        );

    }

}