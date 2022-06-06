package org.launchcode.backend.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProfileForm extends Profile {

    private String PhotoURL;
    private String verifyPassword;
    private String newPassword;

}
