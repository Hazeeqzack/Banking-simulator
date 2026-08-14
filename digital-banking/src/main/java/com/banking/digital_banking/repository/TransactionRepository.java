package com.banking.digital_banking.repository;

import com.banking.digital_banking.entity.Transaction;

import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;


public interface TransactionRepository extends JpaRepository<Transaction, Long> {


    List<Transaction> findByAccountAccountNumber(
            String accountNumber
    );


}
