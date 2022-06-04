package org.launchcode.backend.services;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import org.launchcode.backend.model.ProfileForm;
import org.launchcode.backend.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    public void createUser(User user) throws FirebaseAuthException {
        //Creates UserRecord object unique to Firebase's built in User Database
        UserRecord.CreateRequest register = new UserRecord.CreateRequest()
                .setEmail(user.getEmail())
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
}
