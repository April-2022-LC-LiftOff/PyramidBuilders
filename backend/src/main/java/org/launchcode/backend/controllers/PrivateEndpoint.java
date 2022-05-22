package org.launchcode.backend.controllers;

import org.launchcode.backend.auth.models.User;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("private")
public class PrivateEndpoint {

    @GetMapping("user-details")
    public ResponseEntity<User> getUserInfo(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(user);
    }

}