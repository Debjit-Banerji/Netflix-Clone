# Netlfix Clone

## How to run?

1) Clone the repo on your system.
2) Access the terminal and type "npm install" by going into both "netflix-ui" and "netflix-api" directories inside the parent directory of the project. This will install all node-modules package.
3) Register and get TMDB API from the internet.
4) Register the project on Firebase and get the API.
5) Include both these APIs in an environment variable file inside the project. 
6) Download MongoDB and create a database by the name of "Netflix-Clone" and make a schema named "users".
7) Access the terminal, change the current directory to netflix-ui and type "npm run both".

## Description

This project is a clone of Netflix. It uses ReactJS for the front-end and Express, Node.js for the Backend API as well as MongoDB for the Backend database. I have used Firebase authentication for implementing the Login and Signup features.

## Features:

### 1) Login:
Users can login if their account already exists. This authentication process is handled by Firebase.
   
### 2) Signup:
Users can signup for their account by registering with a valid email and password. After registration, the user will automatically be redirected to the login page, where they can enter their credentials and enter the website.
      
### 3) Home Page:
Upon logging into his/her account, the user will be redirected to the website's Home page. Here, the user can Logout of his account by using the "Power Off" button placed at the right corner of the NavBar. He/she can also search for movies using the collapsable Search Bar (which has not been implemented yet). The user can see the most popular TV Show or Movie at the top of the Home Page. On scrolling down, the user can see Movies and TV Shows which are "Trending" or have been "Newly released", among several other categories. The user can scroll through the movies sideways for each category. When the user hovers his/her cursor over a Movie or TV Show, the name of the Movie or TV Show will be displayed, along with several options like "Play the trailer" indicated by the Play icon, "Like the Movie" indicated by the thumbs up icons (not implemented yet), "Dislike the Movie" indicated by the ThumbsDown icon (not implemented yet), "Add to My List" indicated by the Plus icon and a Read More option indicated by the down arrow icon, and the top 3 genres of each Movie or TV Show will also be displayed at the bottom of that Component. The trailer of the respective Movie or TV Show will also start playing in the background. He/she can then click on the play icon to view the trailer in full-screen mode and get access to many other video-playing options, like controlling the speed, volume, etc.

### 4) Movies Page:
The user can access the Movies Page by clicking the "Movies" Tab on the NavBar. This tab allows the user to filter the movies according to his/her preferred genre. He/she can select the preferred genre by accessing the dropdown menu for Genres.

### 5) TV Shows page:
The user can access the TV Shows Page by clicking the "TV Shows" Tab on the NavBar. This tab allows the user to filter the TV Shows according to his/her preferred genre. He/she can select the preferred genre by accessing the dropdown menu for Genres.

### 6) My List page:
The user can access the My List Page by clicking the "My List" Tab on the NavBar. This tab allows the user to view all the movies and TV shows he/she has added to his/her account's My List for various purposes, such as watching later or watching the ones that he/she has already watched. The user can also delete the movies from his/her database by clicking on the Tick sign that appears on a Movie or TV Show component once he/she hovers his/her cursor over the Movie or TV Show. If the My List section of the User is empty, the user will be shown an info message about how he/she can view Movies/ Tv Shows in their My List Page.
