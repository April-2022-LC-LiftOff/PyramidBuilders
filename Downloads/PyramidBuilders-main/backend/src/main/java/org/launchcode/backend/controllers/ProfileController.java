package org.launchcode.backend.controllers;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import com.google.firebase.auth.UserRecord;
import org.launchcode.backend.model.Profile;
import org.launchcode.backend.model.ProfileForm;
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
@RequestMapping("/api/profile")
public class ProfileController {

    public ProfileService profileService;
    public UserService userService;

    public ProfileController(ProfileService profileService, UserService userService) {
        this.profileService = profileService;
        this.userService = userService;
    }

    @GetMapping("/get")
    public Profile getProfile(@RequestParam String userId) throws ExecutionException, InterruptedException {
        return profileService.getProfile(userId);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateProfile(@RequestHeader("Authorization") String idToken, @RequestBody ProfileForm profileForm) throws ExecutionException, InterruptedException, FirebaseAuthException, IOException {

        String header = User.getUserIdToken(idToken);
        FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(header);
        String uid = decodedToken.getUid();
        UserRecord userRecord = FirebaseAuth.getInstance().getUser(uid);
        User user = User.userFromUserRecord(userRecord);

        Profile profile = new Profile();
        boolean loginFail = Boolean.parseBoolean(signInWithPassword(userRecord.getEmail(), profileForm.getVerifyPassword()));

        if (!loginFail && profileForm.getNewPassword().equals(profileForm.getVerifyPassword())) {
            userService.updateUser(uid, profileForm.getVerifyPassword(), profileForm);
        } else if (!loginFail) {
            userService.updateUser(uid, profileForm.getNewPassword(), profileForm);
        } else {
            Map<String, String> response = new HashMap<>();
            response.put("message", "failure");
            response.put("error", "bad password");
            ResponseEntity responseEntity = new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            return responseEntity;
        }

        profile.setUserUid(uid);
        profile.setUsername(profileForm.getUsername());
        profile.setEmail(profileForm.getEmail());
        profile.setBioText(profileForm.getBioText());
        profileService.updateProfile(profile);


        if (profileForm.getNewPassword().isBlank()) {
            String newId = signInWithPassword(userRecord.getEmail(), profileForm.getVerifyPassword());
            Map<String, String> response = new HashMap<>();
            response.put("message", "success");
            response.put("token", newId);
            response.put("user", String.valueOf(User.setUserInfo(newId)));

            ResponseEntity responseEntity = new ResponseEntity<>(response, HttpStatus.OK);
            return responseEntity;
        } else {
            String newId = signInWithPassword(profileForm.getEmail(), profileForm.getNewPassword());
            Map<String, String> response = new HashMap<>();
            response.put("message", "success");
            response.put("token", newId);
            response.put("user", String.valueOf(User.setUserInfo(newId)));

            ResponseEntity responseEntity = new ResponseEntity<>(response, HttpStatus.OK);
            return responseEntity;
        }


    }

}
