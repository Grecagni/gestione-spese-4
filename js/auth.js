// Funzione per gestire il login
function login(email, password) {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('app-content').style.display = 'block';
        })
        .catch((error) => {
            console.error("Errore durante l'autenticazione:", error.code, error.message);
        });
}

// Gestione del submit del form di login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
});

// Verifica dello stato di autenticazione
auth.onAuthStateChanged((user) => {
    if (user) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('app-content').style.display = 'block';
    } else {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('app-content').style.display = 'none';
    }
});
