package org.launchcode.backend.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.io.InputStream;

@Configuration
public class FirebaseConfig {

        @Autowired
        SecurityProperties secProps;

        @Primary
        @Bean
        public void firebaseInit() {
            InputStream inputStream = null;
            try {
                inputStream = new ClassPathResource("serviceAccountKey.json").getInputStream();
            } catch (IOException e3) {
                e3.printStackTrace();
            }
            try {

                FirebaseOptions options = FirebaseOptions.builder()
                        .setCredentials(GoogleCredentials.fromStream(inputStream))
                        .build();

                if (FirebaseApp.getApps().isEmpty()) {
                    FirebaseApp.initializeApp(options);
                }
                System.out.println("Firebase Initialize");

            } catch (IOException e) {
                e.printStackTrace();
            }
        }
}
