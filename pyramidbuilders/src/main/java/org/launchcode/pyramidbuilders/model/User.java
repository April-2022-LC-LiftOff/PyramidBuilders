package org.launchcode.pyramidbuilders.model;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
public class User extends AbstractEntity{

    @NotBlank
    @Size(max=20)
    private String username;
    @NotBlank
    @Email
    private String email;
    @NotBlank
    @Size(min=8, max = 120)
    private String password;
    @ManyToMany
    @JoinTable( name = "user_roles",
    joinColumns =  = @(name = "userid"))
    private Set<Role> roles = new HashSet<>();

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
}
