package com.banking.banking_middleware.service;

import org.apache.camel.Exchange;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.Duration;


@Service("backendClientService")
public class BackendClientService {


    private final WebClient webClient;


    public BackendClientService(
            WebClient.Builder builder
    ) {

        this.webClient = builder
                .baseUrl("http://localhost:8080")
                .build();

    }


    public String processTransfer(Exchange exchange) {


        String correlationId =
                exchange.getIn()
                        .getHeader(
                                "CorrelationId",
                                String.class
                        );


        Object request =
                exchange.getIn()
                        .getBody();


        System.out.println(
                "Sending request to backend:"
        );

        System.out.println(request);

        System.out.println(
                "Correlation ID: "
                        + correlationId
        );


        return webClient
                .post()
                .uri("/api/transfers")

                .header(
                        "X-Correlation-Id",
                        correlationId
                )

                .bodyValue(request)

                .retrieve()
                .bodyToMono(String.class)

                .timeout(
                        Duration.ofSeconds(5)
                )

                .block();

    }

}