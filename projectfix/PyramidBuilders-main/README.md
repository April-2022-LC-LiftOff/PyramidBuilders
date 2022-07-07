# PyramidBuilders

Our project is a web application where users can browse reviews, create a profile, and post reviews of their own.

## How to use this Repo

### Frontend

- Navigate to the `frontend` folder
- `npm install`
- to run `npm start`

### Backend

- Navigate to the `backend` folder
- Add `Firebase Api Key` to your environment variables
- add service key to `serviceAccountKey.json`
- `bootRun`

## Features
* All users (regardless of account status) are able to browse, search, filter, and sort all reviews.
* Users with a registered account can create a profile which includes a photo, bio, and the ability to tag their interests from a provided list.
* Registered users can create, edit, and delete reviews for given categories (MVP is movies)

## Languages & Tools
* Front End: 
  * Tools: VSCode
  * Languages: JavaScript/React
* Back End: 
  * Tools: Intellij, Postman for Testing
  * Languages: Java with Spring Boot Framework
* Database: Firebase - Cloud NoSQL collections

## What We'll Learn
We will be learning React to create the Front End websites and functionality that will make calls to a Java REST api and a Movie API. In addition, we will be learning to utilize Firebase through their Admin SDK tools, specifically utilizing their built-in Authentication and Cloud database collections to store our review and profile data.

## Future Iterations
* Additional categories (current ideas: books, restaurants, hotels)
* Registered users can “favorite” other users’ reviews, causing those reviews to populate in the “Favorites” section of the user’s profile for easy future reference.
* Ability to “favorite” user accounts, allowing new reviews from that account in the main feed so the user sees it first.
