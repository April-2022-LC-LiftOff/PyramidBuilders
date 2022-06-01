package org.launchcode.backend.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import org.launchcode.backend.auth.models.SecurityProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import java.io.IOException;
import java.io.InputStream;

import static java.lang.System.getenv;

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

                FirebaseOptions options = new FirebaseOptions.Builder()
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
