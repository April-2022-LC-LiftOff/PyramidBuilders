package org.launchcode.backend.services;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.launchcode.backend.model.Profile;
import org.launchcode.backend.model.Review;
import org.launchcode.backend.model.ReviewForm;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class ProfileService {

    public String createProfile(Profile profile) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();


        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection("profiles").document(profile.getUserUid()).set(profile);

        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    public Review getProfile(String userId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference docReference = dbFirestore.collection("profiles").document(userId);
        ApiFuture<DocumentSnapshot> future = docReference.get();
        DocumentSnapshot document = future.get();
        Review review;
        if (document.exists()){
            review = document.toObject(Review.class);
            return review;
        }
        return null;

    }


    public String updateProfile(Profile profile) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection("reviews").document(profile.getUserUid()).set(profile);
        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    public String deleteProfile(String documentId) {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> docReference = dbFirestore.collection("reviews").document(documentId).delete();
        return "Successfully deleted " + documentId;
    }
}
