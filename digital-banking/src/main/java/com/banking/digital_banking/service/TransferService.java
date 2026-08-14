package com.banking.digital_banking.service;

import com.banking.digital_banking.dto.TransferRequest;
import com.banking.digital_banking.dto.TransferResponse;
import com.banking.digital_banking.entity.Account;
import com.banking.digital_banking.entity.Transaction;
import com.banking.digital_banking.exception.AccountNotFoundException;
import com.banking.digital_banking.exception.InsufficientBalanceException;
import com.banking.digital_banking.repository.AccountRepository;
import com.banking.digital_banking.repository.TransactionRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class TransferService {

    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;

    private static final Logger log = LoggerFactory.getLogger(TransferService.class);

    public TransferService(
            AccountRepository accountRepository,
            TransactionRepository transactionRepository
    ) {
        this.accountRepository = accountRepository;
        this.transactionRepository = transactionRepository;
    }

    @Transactional
    public TransferResponse transfer(
            TransferRequest request,
            String correlationId
    ){

        log.info(
                "Transfer started | CorrelationId: {} | From: {} | To: {} | Amount: {}",
                correlationId,
                request.getFromAccount(),
                request.getToAccount(),
                request.getAmount()
        );

        Account sender =
                accountRepository
                        .findByAccountNumber(
                                request.getFromAccount()
                        )
                        .orElseThrow(
                                () -> new AccountNotFoundException(
                                        "Sender account not found"
                                )
                        );

        Account receiver =
                accountRepository
                        .findByAccountNumber(
                                request.getToAccount()
                        )
                        .orElseThrow(
                                () -> new AccountNotFoundException(
                                        "Receiver account not found"
                                )
                        );

        if (sender.getBalance() < request.getAmount()) {

            log.warn(
                    "Insufficient balance | CorrelationId: {} | Account: {} | Balance: {} | Requested: {}",
                    correlationId,
                    sender.getAccountNumber(),
                    sender.getBalance(),
                    request.getAmount()
            );

            throw new InsufficientBalanceException(
                    "Insufficient balance"
            );
        }

        // Deduct sender balance
        sender.setBalance(
                sender.getBalance() - request.getAmount()
        );

        // Add receiver balance
        receiver.setBalance(
                receiver.getBalance() + request.getAmount()
        );

        accountRepository.save(sender);
        accountRepository.save(receiver);

        // Create transaction record
        Transaction transaction = new Transaction();

        transaction.setReferenceId(
                UUID.randomUUID().toString()
        );

        transaction.setDescription(
                request.getDescription()
        );

        transaction.setAmount(
                request.getAmount()
        );

        transaction.setType(
                "TRANSFER"
        );

        transaction.setStatus(
                "SUCCESS"
        );

        transaction.setCreatedAt(
                LocalDateTime.now()
        );

        transaction.setAccount(sender);

        transactionRepository.save(transaction);

        TransferResponse response = new TransferResponse();

        response.setMessage(
                "Transfer successful"
        );

        response.setStatus(
                "SUCCESS"
        );

        response.setAmount(
                request.getAmount()
        );

        log.info(
                "Transfer successful | CorrelationId: {} | Reference: {} | Amount: {}",
                correlationId,
                transaction.getReferenceId(),
                transaction.getAmount()
        );

        return response;
    }
}