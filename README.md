# CodeHub

CodeHub is a MERN stack application designed to interact with the GitHub API, providing functionalities such as fetching user details, authentication using Passport.js, and a feature that allows users to like other's profiles. When users' details are fetched, clicking on a profile or repo will redirect to the respective links.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Error Handling](#error-handling)
- [Deployment](#deployment)

## Features

- **Fetch GitHub User Details**: Use GitHub API to fetch and display user details.
- **Authentication**: Secure login and signup system using Passport.js.
- **Profile Liking**: Users can like each other's profiles.
- **Robust Error Handling**: Comprehensive error handling for API requests and user interactions.
- **Redirection**: Clicking on a fetched data redirects to the corresponding links.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Passport.js
- **API**: GitHub API

### Authentication

- **POST /api/auth/signup**: User signup
- **POST /api/auth/login**: User login

## Error Handling

The application includes robust error handling mechanisms to manage different types of errors:

- **Authentication Errors**: Invalid credentials, token errors.
- **API Errors**: Issues with fetching data from the GitHub API.
- **Validation Errors**: Invalid input data for signup and login.
- **Database Errors**: Issues with MongoDB connectivity and operations.
