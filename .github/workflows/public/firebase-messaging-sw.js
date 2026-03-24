importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey           : 'AIza...',
  authDomain       : 'factory-notify.firebaseapp.com',
  projectId        : 'factory-notify',
  storageBucket    : 'factory-notify.appspot.com',
  messagingSenderId: '123456789',
  appId            : '1:123456789:web:abc123',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const n = payload.notification || {};
  self.registration.showNotification(n.title || 'แจ้งเตือน', {
    body             : n.body || '',
    icon             : '/icon.png',
    badge            : '/icon.png',
    requireInteraction: true,
    vibrate          : [200, 100, 200],
  });
});
