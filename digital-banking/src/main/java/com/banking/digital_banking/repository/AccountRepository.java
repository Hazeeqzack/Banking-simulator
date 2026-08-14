package com.banking.digital_banking.repository;

import com.banking.digital_banking.entity.Account;

import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;


public interface AccountRepository extends JpaRepository<Account, Long> {


    Optional<Account> findByAccountNumber(String accountNumber);


}
