importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey           : 'AIzaSyCiaaGvOkrllRo8CJjfRjmxJrZKtqZsKMA',
  authDomain       : 'factory-notify.firebaseapp.com',
  projectId        : 'factory-notify',
  storageBucket    : 'factory-notify.firebasestorage.app',
  messagingSenderId: '962396303104',
  appId            : '1:962396303104:web:a6206d8c4147fb4a1f4de5',
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
