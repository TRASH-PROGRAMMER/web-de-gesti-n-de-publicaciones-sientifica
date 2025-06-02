const form = document.getElementById('loginForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const userInput = document.getElementById('loginUser').value;
  const passInput = document.getElementById('loginPass').value;

  const registeredUser = localStorage.getItem('registeredUser');
  const registeredPass = localStorage.getItem('registeredPass');

  if (userInput === registeredUser && passInput === registeredPass) {
    alert('Inicio de sesión exitoso.');
    window.location.href = 'publicaciones.html'; // Redirige a publicaciones
  } else {
    alert('Usuario o contraseña incorrectos.');
  }
});
