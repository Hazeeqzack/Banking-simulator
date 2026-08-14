package com.banking.digital_banking.entity;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "accounts")
@Data
public class Account {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(nullable = false, unique = true)
    private String accountNumber;


    private double balance;


    private String currency;


    private String status;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
