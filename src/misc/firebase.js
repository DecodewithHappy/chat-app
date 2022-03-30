import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    
        apiKey: "AIzaSyCB7C5gt0mB62chP4Hk_9R2TJ_HHoKgXC4",
        authDomain: "chat-web-app-fe28e.firebaseapp.com",
        projectId: "chat-web-app-fe28e",
        storageBucket: "chat-web-app-fe28e.appspot.com",
        messagingSenderId: "554331703565",
        appId: "1:554331703565:web:dae08eba38af5d5b4f4844"
      
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();