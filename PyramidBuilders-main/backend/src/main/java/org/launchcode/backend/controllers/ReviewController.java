package org.launchcode.backend.controllers;

import org.launchcode.backend.model.Ratings;
import org.launchcode.backend.model.Review;
import org.launchcode.backend.model.ReviewForm;
import org.launchcode.backend.services.ReviewService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/review")
public class ReviewController {

    public ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping("/create")
    public String createReview(@RequestBody ReviewForm review) throws InterruptedException, ExecutionException {
        return reviewService.createReview(review);
    }

    @GetMapping("/get")
    public Review getReview(@RequestParam String documentId) throws InterruptedException, ExecutionException {
        return reviewService.getReview(documentId);
    }

    @GetMapping("/getAll")
    public ArrayList<Review> getAllReviewsByMovieId (@RequestParam String movieId) throws InterruptedException, ExecutionException {
        return reviewService.getReviewByMovieId(movieId);
    }

    @GetMapping("/getAvgRating")
    public Ratings getAvgRatingByMovieId(@RequestParam String movieId) throws InterruptedException, ExecutionException{
        return reviewService.getAverageStarsByMovieId(movieId);
    }

    @GetMapping("/getByUser")
    public ArrayList<Review> getAllReviewsByUserId (@RequestParam String userId) throws InterruptedException, ExecutionException {
        return reviewService.getReviewByUserId(userId);
    }

    @PutMapping("/update")
    public String updateReview(@RequestBody Review review) throws InterruptedException, ExecutionException {
        return reviewService.updateReview(review);
    }

    @DeleteMapping("/delete")
    public String deleteReview(@RequestParam String documentId) throws InterruptedException, ExecutionException {
        return reviewService.deleteReview(documentId);
    }
}
