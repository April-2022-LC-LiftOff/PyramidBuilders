package org.launchcode.backend.model;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
public class Profile {

    private String userUid;
    private String username;
    private String email;
    private String bioText;
    private ArrayList<String> friendsList;

    public void addFriend(String userUid){
        friendsList.add(userUid);
    }

}
