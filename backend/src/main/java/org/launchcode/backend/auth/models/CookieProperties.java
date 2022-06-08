package org.launchcode.backend.auth.models;

import lombok.Data;

@Data
public class CookieProperties {
    String domain;
    String path;
    boolean httpOnly;
    boolean secure;
    int maxAgeInMinutes;
}
