package org.launchcode.backend.auth.models;

import lombok.Data;

import java.io.Serializable;

@Data
public class User implements Serializable {

    private static long serialVersionUID = 2105142022;
    private String uid;
    private String name;
    private String email;
    private boolean isEmailVerified;
    private String issuer;
    private String picture;
}
