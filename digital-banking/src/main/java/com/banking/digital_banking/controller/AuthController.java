package com.banking.digital_banking.controller;

import com.banking.digital_banking.dto.AuthRequest;
import com.banking.digital_banking.dto.AuthResponse;
import com.banking.digital_banking.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public AuthResponse login(@Valid @RequestBody AuthRequest request) {
        return authService.login(request);
    }
}