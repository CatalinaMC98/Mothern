// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDMarr0skOx0qMEKUzD27vzAmhU_b55ciM",
  authDomain: "webappmothern.firebaseapp.com",
  projectId: "webappmothern",
  storageBucket: "webappmothern.appspot.com",
  messagingSenderId: "93383017963",
  appId: "1:93383017963:web:ea8fc20a0b7ea7f5dd85ae",
  measurementId: "G-R0N210G12F"
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