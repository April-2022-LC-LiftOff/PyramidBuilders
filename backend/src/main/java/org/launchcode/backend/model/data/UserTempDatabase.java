package org.launchcode.backend.model.data;

import org.launchcode.backend.model.User;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

public class UserTempDatabase {

    private static Map<Integer, User> users = new HashMap<>();

    public static Collection<User> getAll() {
        return users.values();
    }

    public static void add(User user){
        users.put(user.getId(), user);
    }

}
