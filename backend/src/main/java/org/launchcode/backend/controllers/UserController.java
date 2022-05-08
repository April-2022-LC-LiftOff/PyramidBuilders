package org.launchcode.backend.controllers;

import org.launchcode.backend.model.User;
import org.launchcode.backend.model.data.UserTempDatabase;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

    @PostMapping("/register")
    public ResponseEntity<?> registerUser (@RequestBody User user){


        int id = user.getId();
        Map<String,String> map = Collections.singletonMap("id", Integer.toString(id));
        return new ResponseEntity<>(map, HttpStatus.CREATED) ;

    }
}
