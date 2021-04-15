// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAoxPLe-nP6Q3JoswTT-_Cc8IpoLew_10U",
  authDomain: "mothern-eac5a.firebaseapp.com",
  projectId: "mothern-eac5a",
  storageBucket: "mothern-eac5a.appspot.com",
  messagingSenderId: "190334513765",
  appId: "1:190334513765:web:401420ec9e8ed4757a8c8c",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//   console.log('Received background message ', payload);

//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });