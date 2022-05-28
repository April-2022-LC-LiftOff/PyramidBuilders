package org.launchcode.backend.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewForm {
    private String title;
    private String userUID;
    private String movieId;
    private Ratings rating;
    private String reviewText;
}
