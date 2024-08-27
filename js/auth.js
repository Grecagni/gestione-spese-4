// Funzione per gestire il login
function login(email, password) {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            document.getElementById('user-info').innerText = `Utente autenticato: ${user.email}`;
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
