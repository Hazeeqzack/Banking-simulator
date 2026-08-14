package com.banking.digital_banking.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;


@Entity
@Table(name = "transactions")
@Data
public class Transaction {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(nullable = false, unique = true)
    private String referenceId;


    private String description;


    private double amount;


    private String type;


    private String status;


    private LocalDateTime createdAt;



    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;

}
