package org.launchcode.backend.model;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;

@Getter
@Setter
public class ProfileForm extends Profile {

    private String PhotoURL;
    private String verifyPassword;
    private String newPassword;

}
