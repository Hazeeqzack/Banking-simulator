// config/DataSeeder.java
package com.banking.digital_banking.config;

import com.banking.digital_banking.entity.Account;
import com.banking.digital_banking.entity.Transaction;
import com.banking.digital_banking.entity.User;
import com.banking.digital_banking.repository.AccountRepository;
import com.banking.digital_banking.repository.TransactionRepository;
import com.banking.digital_banking.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner initDatabase(
            UserRepository userRepository,
            AccountRepository accountRepository,
            TransactionRepository transactionRepository,
            PasswordEncoder passwordEncoder
    ) {
        return args -> {

            User user = userRepository.findByEmail("hazeeq@bank.com").orElseGet(User::new);
            user.setName("Hazeeq");
            user.setEmail("hazeeq@bank.com");
            user.setPassword(passwordEncoder.encode("password123"));
            user.setRole("CUSTOMER");
            user = userRepository.save(user);

            if (accountRepository.findByAccountNumber("1234567890").isEmpty()) {
                Account sender = new Account();
                sender.setAccountNumber("1234567890");
                sender.setBalance(15000);
                sender.setCurrency("MYR");
                sender.setStatus("ACTIVE");
                sender.setUser(user);
                accountRepository.save(sender);
            }

            if (accountRepository.findByAccountNumber("9876543210").isEmpty()) {
                Account receiver = new Account();
                receiver.setAccountNumber("9876543210");
                receiver.setBalance(5000);
                receiver.setCurrency("MYR");
                receiver.setStatus("ACTIVE");
                receiver.setUser(user);
                accountRepository.save(receiver);
            }

            if (transactionRepository.count() == 0) {
                Account senderAccount = accountRepository.findByAccountNumber("1234567890").orElseThrow();

                Transaction transaction = new Transaction();
                transaction.setReferenceId("TXN001");
                transaction.setDescription("Initial Deposit");
                transaction.setAmount(15000);
                transaction.setType("CREDIT");
                transaction.setStatus("SUCCESS");
                transaction.setCreatedAt(LocalDateTime.now());
                transaction.setAccount(senderAccount);
                transactionRepository.save(transaction);
            }
        };
    }
}