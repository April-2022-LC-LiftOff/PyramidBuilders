package org.launchcode.backend.model;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import com.google.firebase.auth.UserRecord;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestHeader;

import java.util.HashMap;

public class User extends AbstractEntity {

    private String username;
    private String email;
    private String password;

    private String verifyPassword;

    public User(){}

    public User(String username, String email, String password, String verifyPassword) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.verifyPassword = verifyPassword;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getVerifyPassword() {
        return verifyPassword;
    }

    public void setVerifyPassword(String verifyPassword) {
        this.verifyPassword = verifyPassword;
    }

    //for demonstration purposes
    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    public static HashMap<String, String> getUserInfo(String header) throws FirebaseAuthException {
        String id = User.getUserIdToken(header);
        HashMap<String,String> user = User.setUserInfo(id);
        return user;
    }

    public static HashMap<String, String> setUserInfo(String idToken) throws FirebaseAuthException{
        FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(idToken);
        String uid = decodedToken.getUid();
        UserRecord user = FirebaseAuth.getInstance().getUser(uid);
        HashMap<String, String> userInfo = new HashMap<>();
        userInfo.put("userID", user.getUid());
        userInfo.put("username", user.getDisplayName());
        userInfo.put("email", user.getEmail());
        userInfo.put("photoUrl", user.getPhotoUrl());
        return userInfo;
    }
    public static String getUserIdToken (String header) throws FirebaseAuthException {

        String idToken = header.replace("Bearer ", "");

        return idToken;
    }

}
