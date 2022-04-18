console.log('Service Worker Loaded...');

self.addEventListener('push', e => {
  const data = e.data.json();
  console.log('Push Recieved...');
  self.registration.showNotification(data.title, {
    body: 'Notified!',
    icon: '"C:\Users\Tannistha\OneDrive\Desktop\logo-social.png"'
  });
});