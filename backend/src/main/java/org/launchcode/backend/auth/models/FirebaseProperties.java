package org.launchcode.backend.auth.models;

import lombok.Data;

@Data
public class FirebaseProperties {

    int sessionExpiryInDays;
    String databaseUrl;
    boolean enableStrictServerSession;
    boolean enabledCheckSessionRevoked;
    boolean enabledLogoutEverywhere;
}
