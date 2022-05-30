package org.launchcode.backend.controllers;

import com.google.firebase.auth.FirebaseAuthException;
import org.launchcode.backend.model.Profile;
import org.launchcode.backend.model.User;
import org.launchcode.backend.services.ProfileService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.concurrent.ExecutionException;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    public ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

//    @PostMapping("/create")
//    public String createProfile(@RequestHeader("Authorization") String header) throws FirebaseAuthException, ExecutionException, InterruptedException {
//        HashMap<String, String> user = User.getUserInfo(header);
//        Profile userProfile = new Profile();
//
//        userProfile.setUserUid(user.get("userID"));
//        userProfile.setUsername(user.get("username"));
//        userProfile.setEmail(user.get("email"));
//        userProfile.setBioText("Write your bio here.");
//
//        return profileService.createProfile(userProfile);
//
//    }
}
