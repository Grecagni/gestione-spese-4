const firebaseConfig = {
    apiKey: "AIzaSyC1vkNeOioENO-AMKGh1pw9nekabJ-WLt8",
    authDomain: "gestione-spese-4.firebaseapp.com",
    projectId: "gestione-spese-4",
    storageBucket: "gestione-spese-4.appspot.com",
    messagingSenderId: "538040125454",
    appId: "1:538040125454:web:e43c3cd1163622ed51945f"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
