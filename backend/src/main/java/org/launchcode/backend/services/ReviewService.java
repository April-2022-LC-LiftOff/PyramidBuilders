package org.launchcode.backend.services;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.launchcode.backend.model.Ratings;
import org.launchcode.backend.model.Review;
import org.launchcode.backend.model.ReviewForm;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;


@Service
public class ReviewService {


    public String createReview(ReviewForm form) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        Review review = new Review();

        Review newReview = Review.createReviewFromForm(form);

        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection("reviews").document(newReview.getId()).set(newReview);

        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    public Review getReview(String documentId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference docReference = dbFirestore.collection("reviews").document(documentId);
        ApiFuture<DocumentSnapshot> future = docReference.get();
        DocumentSnapshot document = future.get();
        Review review;
        if (document.exists()){
            review = document.toObject(Review.class);
            return review;
        }
        return null;

    }

    public ArrayList<Review> getReviewByMovieId(String movieId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ArrayList<Review> list = new ArrayList<>();
        // asynchronously retrieve multiple documents
        ApiFuture<QuerySnapshot> future = dbFirestore.collection("reviews").whereEqualTo("movieId", movieId).get();
        // future.get() blocks on response
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        for (DocumentSnapshot document : documents) {
            list.add(document.toObject(Review.class));
        }

        return list;
    }

    public Ratings getAverageStarsByMovieId(String movieId) throws ExecutionException, InterruptedException {
        Review[] reviews = getReviewByMovieId(movieId).toArray(new Review[0]);
        int rating = 0;
        for (Review review : reviews){
            rating += review.getRating().getValue();
        }
        int reviewNum = reviews.length;
        int avgRating = rating/reviewNum;

        if(avgRating > 4.5){
            return Ratings.FIVE;
        } else if (avgRating < 4.5 && avgRating > 3.5) {
            return Ratings.FOUR;
        } else if (avgRating < 3.5 && avgRating > 2.5) {
            return Ratings.THREE;
        } else if (avgRating < 2.5 && avgRating > 1.5) {
            return Ratings.TWO;
        }else {
            return Ratings.ONE;
        }
    }

    public ArrayList<Review> getReviewByUserId(String userUID) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ArrayList<Review> list = new ArrayList<>();
        // asynchronously retrieve multiple documents
        ApiFuture<QuerySnapshot> future = dbFirestore.collection("reviews").whereEqualTo("userUID", userUID).get();
        // future.get() blocks on response
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        for (DocumentSnapshot document : documents) {
            list.add(document.toObject(Review.class));
        }

        return list;
    }

    public String updateReview(Review review) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection("reviews").document(review.getId()).set(review);
        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    public String deleteReview(String documentId) {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> docReference = dbFirestore.collection("reviews").document(documentId).delete();
     return "Successfully deleted " + documentId;
    }
}
