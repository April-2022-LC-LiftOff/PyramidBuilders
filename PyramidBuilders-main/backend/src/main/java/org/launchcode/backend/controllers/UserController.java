package org.launchcode.backend.controllers;

import com.google.firebase.auth.FirebaseAuthException;
import org.launchcode.backend.model.LoginForm;
import org.launchcode.backend.model.Profile;
import org.launchcode.backend.model.User;
import org.launchcode.backend.services.ProfileService;
import org.launchcode.backend.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutionException;

import static org.launchcode.backend.services.UserService.signInWithPassword;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {



    public ProfileService profileService;
    public UserService userService;

    public UserController(ProfileService profileService, UserService userService) {
        this.profileService = profileService;
        this.userService = userService;
    }

    @GetMapping("/user")
    public ResponseEntity<?> getUser (@RequestHeader("Authorization") String header) throws FirebaseAuthException {

        HashMap<String,String> userData = User.getUserInfo(header);

        ResponseEntity response = new ResponseEntity(userData, HttpStatus.OK);

        return response;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser (@RequestBody LoginForm login) throws FirebaseAuthException, IOException {

        String email = login.getEmail();
        String pwHash = login.getPassword();

            //User signs in
            String idToken= signInWithPassword(email, pwHash);
            Map<String, String> response = new HashMap<>();
            response.put("message", "success");
            response.put("token", idToken);
            response.put("user", String.valueOf(User.setUserInfo(idToken)));

            ResponseEntity responseEntity = new ResponseEntity<>(response, HttpStatus.OK);
            return responseEntity;
    }



    @PostMapping("/register")
    public ResponseEntity<?> registerUser (@RequestBody User user) throws FirebaseAuthException, IOException, ExecutionException, InterruptedException {
        String username = user.getUsername();
        String email = user.getEmail();
        String password = user.getPassword();
        String verifyPass = user.getVerifyPassword();

        if (verifyPass.equals(password)){

        userService.createUser(user);

        //User signs in automatically after registration

        String idToken = signInWithPassword(email, password);
            HashMap<String, String> createdUser = User.getUserInfo(idToken);
        Map<String, String> response = new HashMap<>();
            response.put("message", "success");
            response.put("token", idToken);
            response.put("user", String.valueOf(User.getUserInfo(idToken)));


        Profile userProfile = new Profile();

        userProfile.setUserUid(createdUser.get("userID"));
        userProfile.setUsername(createdUser.get("username"));
        userProfile.setEmail(createdUser.get("email"));
        userProfile.setBioText("Write your bio here.");

        profileService.createProfile(userProfile);

        ResponseEntity responseEntity = new ResponseEntity<>(response, HttpStatus.CREATED);
        return responseEntity;
        } else {
            Map<String, String> errorMessage = new HashMap<>();
            errorMessage.put("message", "Passwords don't match");
            ResponseEntity responseEntity = new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);

            return responseEntity;
        }

    }





}
