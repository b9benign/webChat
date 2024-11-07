# ChatApp with React, TypeScript, and Firebase

A simple chat application built with React, TypeScript, Firebase Authentication, and Firestore. This app allows users to sign up, log in, and chat in real-time. Messages are stored in Firestore, and authentication is managed through Firebase.

## Features

- User authentication (sign up, log in, log out)
- Real-time chat using Firestore
- Firebase Firestore database integration
- Simple and clean UI

## Tech Stack

- **Frontend**: React, TypeScript
- **Backend**: Firebase Authentication, Firestore (NoSQL database)
- **Authentication**: Firebase Authentication
- **Build Tool**: Vite

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (LTS version): [Install Node.js](https://nodejs.org/)
- **npm** (comes with Node.js): To manage dependencies

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/chat-app.git .
```

### 2. Install dependencies
```bash
npm i
```

### 3. Set up Firebase
**1. Create a Firebase project**
- Go to [Firebase console](https://console.firebase.google.com/)
- Create a new project
**2. Enable Firebase Authentication**
- In the Firebase Console, navigate to Authentication > Sign-in method
- Enable Email/Password authentication and authentication via Google as well as any other method you prefer
**3. Set up Firestore**
- In the Firebase Console, navigate to Firestore Database
- Create a Firestore database in test mode (you can change the rules later for production)
**4. Connect your code and Firebase projects**
-- find your Firebase config in your Project settings > Web API Key
-- create a .env at the root of your code project and pass your Firebase config to it
```bash
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

**5. Adjust Firestore permissions**
-- you may need to adjust your [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started?hl=en) to properly use your app

### 4. Start your development server
-- navigate to the root of your project
```bash
npm run dev
```
-- vite will, by default, start your app on [localhost:5173](http://localhost:5173)

