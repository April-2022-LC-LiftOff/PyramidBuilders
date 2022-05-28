package org.launchcode.backend.services;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import org.launchcode.backend.config.FirebaseConfig;
import org.launchcode.backend.model.Review;
import org.launchcode.backend.model.ReviewForm;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

//@Service
//public class ReviewService {
//
//
//    public String createReview(ReviewForm form) throws ExecutionException, InterruptedException {
//        Firestore dbFirestore = FirestoreClient.getFirestore();
//
//        Review review = new Review();
//
//        Review newReview = review.createReviewFromForm(form);
//
//        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection("reviews").document(newReview.getId()).set(newReview);
//
//        return collectionsApiFuture.get().getUpdateTime().toString();
//    }
//
//    public Review getReview(String documentId) throws ExecutionException, InterruptedException {
//        Firestore dbFirestore = FirestoreClient.getFirestore();
//        DocumentReference docReference = dbFirestore.collection("reviews").document(documentId);
//        ApiFuture<DocumentSnapshot> future = docReference.get();
//        DocumentSnapshot document = future.get();
//        Review review;
//        if (document.exists()){
//            review = document.toObject(Review.class);
//            return review;
//        }
//        return null;
//
//    }
//
//    public String updateReview(ReviewForm form) throws ExecutionException, InterruptedException {
//
//        Firestore dbFirestore = FirestoreClient.getFirestore();
//
//        Review review = new Review();
//
//        Review newReview = review.createReviewFromForm(form);
//
//        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection("reviews").document(newReview.getId()).set(newReview);
//        return collectionsApiFuture.get().getUpdateTime().toString();
//    }
//
//    public String deleteReview(String documentId) {
//        Firestore dbFirestore = FirestoreClient.getFirestore();
//        ApiFuture<WriteResult> docReference = dbFirestore.collection("reviews").document(documentId).delete();
//     return "Successfully deleted " + documentId;
//    }
//}
