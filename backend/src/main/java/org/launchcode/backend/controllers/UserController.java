package org.launchcode.backend.controllers;

import com.google.api.client.json.Json;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import org.launchcode.backend.model.User;
import org.launchcode.backend.model.data.UserTempDatabase;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.io.InputStream;
import java.net.*;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Collections;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

//    @PostMapping("/register")
//    public ResponseEntity<?> registerUser (@RequestBody User user){
//
//
//        int id = user.getId();
//        Map<String,String> map = Collections.singletonMap("id", Integer.toString(id));
//
//        return new ResponseEntity<>(map, HttpStatus.CREATED) ;
//
//    }

    PasswordEncoder encoder = new BCryptPasswordEncoder();
    @PostMapping("/register")
    public ResponseEntity<?> registerUser (@RequestBody User user) throws FirebaseAuthException {
        UserRecord.CreateRequest register = new UserRecord.CreateRequest()
                .setEmail(user.getEmail())
                .setEmailVerified(false)
                .setPassword(encoder.encode(user.getPassword()))
                .setDisplayName(user.getUsername())
                .setDisabled(false);

        UserRecord userRecord = FirebaseAuth.getInstance().createUser(register);


        return new ResponseEntity<>( HttpStatus.CREATED);

    }

//    @PostMapping("/test")
//    public HttpResponse<?> getSessionJWT (User user) {
//        String query = "{\"email\": \"" + user.getEmail() +  "\"" +
//                "\"password\": \"" + user.getPassword() + "\"," +
//                "\"returnSecureToken\": true}";
//
//        HttpClient client = HttpClient.newHttpClient();
//
//        HttpRequest request = HttpRequest.newBuilder().uri(URI.create("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=API_KEY")).POST(HttpRequest.BodyPublishers.ofString(query)).build();
//
//       return (HttpResponse<?>) HttpClient.newHttpClient().sendAsync(request, HttpResponse.BodyHandlers.ofString())
//               .thenApply(HttpResponse::statusCode)
//               .thenAccept(System.out::println);
//
//    }
}
