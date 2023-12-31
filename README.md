# QuickCamp / YelpCamp

QuickCamp is a web application that allows users to browse and review campgrounds. It's a full-stack project built with Node.js, Express, MongoDB, and other technologies displaying CRUD functionality on campgrounds.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Demo

You can check out a live demo of YelpCamp [here](https://quickcamp.onrender.com).

## Features

- User authentication and authorization
- Browse and search for campgrounds by location
- View detailed campground information, including images and reviews
- Add, edit, and delete campgrounds
- Leave reviews for campgrounds
- User-friendly interface with responsive design

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Passport.js
- **Map Integration**: Mapbox
- **Image Storage**: Cloudinary
- **Security**: Helmet, Express Mongo Sanitize
- **Session Management**: Express-session, Connect-mongo
- **Deployment**: Render

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/berginprem/QuickCamp.git
   cd yelpcamp
2. Install the project dependencies:
    ```bash
    npm install
3. Create a .env file in the project root and add your environment variables:
    ```bash 
    MongoDB URI (e.g., "mongodb://localhost:27017/yelpcamp")
    DB_URL=your-mongodb-uri

    Mapbox API Token (Get your token at https://www.mapbox.com/)
    MAPBOX_TOKEN=your-mapbox-token

    Cloudinary Configuration (Sign up at https://cloudinary.com/ to get your credentials)
    CLOUDINARY_CLOUD_NAME=your-cloud-name
    CLOUDINARY_API_KEY=your-api-key
    CLOUDINARY_API_SECRET=your-api-secret

    Session Secret (Choose a secret for session management)
    SECRET=your-session-secret
4. Start the development server:

   ```bash
    node ./app.js
5. Visit [http://localhost:3000](http://localhost:3000)  in your web browser to see the app.

## Usage

- Register for an account or log in to an existing account.
 
- Explore campgrounds by browsing or searching by location.
 
- Click on a campground to view more details.
 
- Add new campgrounds, edit existing ones, or delete 
campgrounds you've created.
 
- Leave reviews for campgrounds you've visited.

### Homepage
![Homepage](./ss%20file/Screenshot_28.png)
### All Campgrounds 
![Campgrounds](./ss%20file/Screenshot_29.png)
### Cluster map
![ClusterMap](./ss%20file/Screenshot_30.png)
### Create campground posts with pictures and descriptions
![Createcampground](./ss%20file/Screenshot_31.png)
### Login
![Login](./ss%20file/Screenshot_32.png)
### Edit/ Delete campground posts
![Edit/Delete](./ss%20file/Screenshot_33.png)
### Leave reviews for other users
![Review](./ss%20file/Screenshot_27.png)
![Review](./ss%20file/Screenshot_34.png)
