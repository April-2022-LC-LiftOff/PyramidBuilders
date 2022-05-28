package org.launchcode.backend.model;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class Review extends AbstractEntity {

    private String title;
    private String userUID;
    private String movieId;
    private Enum<Ratings> rating;
    private String reviewText;

    public Review(){

    }

    public static Review createReviewFromForm(ReviewForm form){
        Review review = new Review();
        review.setTitle(form.getTitle());
        review.setUserUID(form.getUserUID());
        review.setMovieId(form.getMovieId());
        review.setRating(form.getRating());
        review.setReviewText(form.getReviewText());
        return review;
    }
}
