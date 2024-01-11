# Real-Time Messenger App

## Overview

This Real-Time Messenger App is a full-featured communication platform built with the MERN stack (MongoDB, Express.js, React, Node.js) and integrates real-time messaging capabilities through Socket.IO. It supports JWT authentication, account creation, password changes, and user search functionality.

## Features

- **Real-Time Messaging**: Instantly send and receive messages using Socket.IO.
- **User Authentication**: Secure signup/login process with JWT.
- **Account Management**: Users can sign up, log in, and reset their passwords.
- **Search Functionality**: Find other users quickly with the built-in search feature.
- **Responsive Design**: A user-friendly interface that adapts to various screen sizes.

## Technologies Used

- **Frontend**: React.js with hooks for state management and React Router for navigation.
- **Backend**: Node.js and Express.js server.
- **Database**: MongoDB with Mongoose for data modeling.
- **Real-Time Communication**: Socket.IO.
- **Authentication**: JSON Web Tokens (JWT).
- **Styling**: CSS3 with a focus on a modern and clean user interface.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- Node.js
- npm (comes with Node.js)
- MongoDB

### Installing

Follow these steps to get your development environment running:

```bash
# Clone the repository
git clone https://github.com/yourusername/real-time-messenger-app.git

# Navigate to the cloned repository
cd real-time-messenger-app

# Install backend dependencies
npm install

# Start the backend server
npm start

# Navigate to the frontend directory from the root directory
cd client

# Install frontend dependencies
npm install

# Start the frontend server
npm start
```

After following these steps, both the frontend and backend servers should be running on your local machine.

### Usage
After signing up and logging in, users can:

Find and message people using the search functionality.
Send and receive messages in real-time.
Update their profile and change their passwords.
