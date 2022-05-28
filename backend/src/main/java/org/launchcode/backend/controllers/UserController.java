package org.launchcode.backend.controllers;

import com.google.api.client.googleapis.util.Utils;
import com.google.api.client.http.GenericUrl;
import com.google.api.client.http.HttpRequest;
import com.google.api.client.http.HttpResponse;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.json.JsonHttpContent;
import com.google.api.client.json.GenericJson;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.JsonObjectParser;
import com.google.common.collect.ImmutableMap;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import com.google.firebase.auth.UserRecord;
import org.launchcode.backend.model.LoginForm;
import org.launchcode.backend.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static java.lang.System.getenv;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

    private static final String API_KEY = getenv("PROJECTKEY");
    private static final String VERIFY_PASSWORD_URL =
            "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" + API_KEY;
    private static final JsonFactory jsonFactory = Utils.getDefaultJsonFactory();
    private static final HttpTransport transport = Utils.getDefaultTransport();

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
    public ResponseEntity<?> registerUser (@RequestBody User user) throws FirebaseAuthException, IOException {
        String username = user.getUsername();
        String email = user.getEmail();
        String password = user.getPassword();
        String verifyPass = user.getVerifyPassword();

        if (verifyPass.equals(password)){

        //Creates UserRecord object unique to Firebase's built in User Database
        UserRecord.CreateRequest register = new UserRecord.CreateRequest()
                .setEmail(email)
                .setEmailVerified(false)
                .setPassword(password)
                .setDisplayName(username)
                .setDisabled(false);

        //Sends User to Firebase's built in User Database.
        UserRecord userRecord = FirebaseAuth.getInstance().createUser(register);

        //User signs in automatically after registration
        String idToken = signInWithPassword(email, password);
            Map<String, String> response = new HashMap<>();
            response.put("message", "success");
            response.put("token", idToken);
            response.put("user", String.valueOf(User.getUserInfo(idToken)));

        ResponseEntity responseEntity = new ResponseEntity<>(response, HttpStatus.CREATED);
        return responseEntity;
        } else {
            Map<String, String> errorMessage = new HashMap<>();
            errorMessage.put("message", "Passwords don't match");
            ResponseEntity responseEntity = new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);

            return responseEntity;
        }

    }
    //Calls to Google API to verify login with password from Firebase User database and produces a JWT authentication token
    private String signInWithPassword(String email, String password) throws IOException {
        GenericUrl url = new GenericUrl(VERIFY_PASSWORD_URL);
        //creates the JSON request headed to above URL API
        Map<String, Object> content = ImmutableMap.of(
                "email", email, "password", password, "returnSecureToken", true);
       //Send JSON post request to API specified in the URL
        HttpRequest request = transport.createRequestFactory().buildPostRequest(url,
                new JsonHttpContent(jsonFactory, content));
        request.setParser(new JsonObjectParser(jsonFactory));

        //Sends request
        HttpResponse response = request.execute();
        //Produces the Authentication token.
        try {
            GenericJson json = response.parseAs(GenericJson.class);
            return json.get("idToken").toString();
        } finally {
            response.disconnect();
        }
    }




}
