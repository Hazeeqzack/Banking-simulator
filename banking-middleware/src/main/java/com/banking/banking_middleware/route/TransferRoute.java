package com.banking.banking_middleware.route;


import com.banking.banking_middleware.processor.CorrelationIdProcessor;
import com.banking.banking_middleware.processor.LoggingProcessor;
import com.banking.banking_middleware.processor.MessageEnrichmentProcessor;
import com.banking.banking_middleware.processor.TransferMappingProcessor;
import org.apache.camel.builder.RouteBuilder;
import org.springframework.stereotype.Component;


@Component
public class TransferRoute extends RouteBuilder {


    private final LoggingProcessor loggingProcessor;

    private final CorrelationIdProcessor correlationIdProcessor;

    private final MessageEnrichmentProcessor enrichmentProcessor;

    private final TransferMappingProcessor mappingProcessor;


    public TransferRoute(
            LoggingProcessor loggingProcessor,
            CorrelationIdProcessor correlationIdProcessor,
            MessageEnrichmentProcessor enrichmentProcessor,
            TransferMappingProcessor mappingProcessor
    ){

        this.loggingProcessor = loggingProcessor;
        this.correlationIdProcessor = correlationIdProcessor;
        this.enrichmentProcessor = enrichmentProcessor;
        this.mappingProcessor = mappingProcessor;

    }


    @Override
    public void configure() throws Exception {

        onException(Exception.class)

                .handled(true)

                .log(
                        "ERROR OCCURRED : ${exception.message}"
                )

                .setBody(
                        simple(
                                """
                                {
                                  "status":"FAILED",
                                  "message":"ESB099 - Unexpected error"
                                }
                                """
                        )
                );


        from("direct:transfer")

                .routeId("banking-transfer-route")

                .process(correlationIdProcessor)

                .process(enrichmentProcessor)

                .process(loggingProcessor)

                .process(mappingProcessor)

                .log("Calling backend service")

                .to(
                        "bean:backendClientService?method=processTransfer"
                )

                .log("Backend response received");

    }

}