package org.launchcode.backend.model;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class LoginForm {

    private String email;
    private String password;

    public LoginForm(String email, String password) {
        this.email = email;
        this.password = password;
    }


}
