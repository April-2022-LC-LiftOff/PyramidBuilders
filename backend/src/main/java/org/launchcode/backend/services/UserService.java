package org.launchcode.backend.services;

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
import com.google.firebase.auth.UserRecord;
import org.launchcode.backend.model.ProfileForm;
import org.launchcode.backend.model.User;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Map;

import static java.lang.System.getenv;

@Service
public class UserService {

    private static final String API_KEY = getenv("PROJECTKEY");
    private static final String VERIFY_PASSWORD_URL =
            "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" + API_KEY;
    private static final JsonFactory jsonFactory = Utils.getDefaultJsonFactory();
    private static final HttpTransport transport = Utils.getDefaultTransport();
    public void createUser(User user) throws FirebaseAuthException {
        //Creates UserRecord object unique to Firebase's built in User Database
        UserRecord.CreateRequest register = new UserRecord.CreateRequest()
                .setEmail(user.getEmail())
                .setPhotoUrl("../../assets/profile.png")
                .setEmailVerified(false)
                .setPassword(user.getPassword())
                .setDisplayName(user.getUsername())
                .setDisabled(false);

        //Sends User to Firebase's built in User Database.
        UserRecord userRecord = FirebaseAuth.getInstance().createUser(register);
    }

    public void updateUser(String uid, String password, ProfileForm profile) throws FirebaseAuthException {
        UserRecord.UpdateRequest request = new UserRecord.UpdateRequest(uid)
                .setEmail(profile.getEmail())
                .setPassword(password)
                .setDisplayName(profile.getUsername())
                .setPhotoUrl(profile.getPhotoURL());

        UserRecord userRecord = FirebaseAuth.getInstance().updateUser(request);

    }

    public UserRecord getUser(String uid) throws FirebaseAuthException {
        UserRecord userRecord = FirebaseAuth.getInstance().getUser(uid);

       return userRecord;
    }

    public void deleteUser(String uid) throws FirebaseAuthException {
        FirebaseAuth.getInstance().deleteUser(uid);
        System.out.println("Successfully deleted user.");
    }

    //Calls to Google API to verify login with password from Firebase User database and produces a JWT authentication token
    public static String signInWithPassword(String email, String password) throws IOException {
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
