const form = document.getElementById('registerForm');
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Evitar envío

  const user = document.getElementById('regName').value;
  const pass = document.getElementById('regPass').value;

  // Guardar en localStorage (no es seguro para producción, solo demo)
  localStorage.setItem('registeredUser', user);
  localStorage.setItem('registeredPass', pass);

  alert('Registro exitoso. Ahora puedes iniciar sesión.');
  window.location.href = 'login.html';
});
