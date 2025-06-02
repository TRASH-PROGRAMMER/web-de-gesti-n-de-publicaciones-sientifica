document.addEventListener('DOMContentLoaded', function() {
  mostrarCatalogoPublicaciones();

  // Añadimos funcionalidad al botón de búsqueda
  const botonBuscar = document.querySelector('.button-search');
  botonBuscar.addEventListener('click', buscarPublicaciones);
});

function mostrarCatalogoPublicaciones() {
  const publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];
  const tbody = document.getElementById('catalogo-publicaciones');
  tbody.innerHTML = '';

  publicaciones.forEach((pub, index) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${pub.titulo}</td>
      <td>${pub.autores}</td>
      <td>${pub.fecha}</td>
      <td>${pub.tipo}</td>
      <td>${pub.doi}</td>
      <td>${pub.isbn}</td>
      <td>${pub.archivo || 'Sin archivo'}</td>
      <td>
        <button onclick="eliminarPublicacion(${index})">Eliminar</button><br></br>
        <button onclick="verDetalles(${pub.id})">Ver Detalles</button>
      </td>
    `;
    tbody.appendChild(fila);
  });
}

function eliminarPublicacion(index) {
  const publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];
  publicaciones.splice(index, 1);
  localStorage.setItem('publicaciones', JSON.stringify(publicaciones));
  mostrarCatalogoPublicaciones();
}

function verDetalles(id) {
  const publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];
  const detalle = publicaciones.find(p => p.id === id);
  localStorage.setItem('detallePublicacion', JSON.stringify(detalle));
  window.location.href = 'detalle.html';
}

function buscarPublicaciones() {
  const query = document.getElementById('search').value.toLowerCase();
  const publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];
  const tbody = document.getElementById('catalogo-publicaciones');
  tbody.innerHTML = '';

  publicaciones.forEach((pub, index) => {
    // Convertir toda la fila a texto y verificar si incluye el query
    const filaTexto = `${pub.titulo} ${pub.autores} ${pub.fecha} ${pub.tipo} ${pub.doi} ${pub.isbn} ${pub.archivo || ''}`.toLowerCase();
    if (filaTexto.includes(query)) {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${pub.titulo}</td>
        <td>${pub.autores}</td>
        <td>${pub.fecha}</td>
        <td>${pub.tipo}</td>
        <td>${pub.doi}</td>
        <td>${pub.isbn}</td>
        <td>${pub.archivo || 'Sin archivo'}</td>
        <td>
          <button onclick="eliminarPublicacion(${index})">Eliminar</button><br></br>
          <button onclick="verDetalles(${pub.id})">Ver Detalles</button>
        </td>
      `;
      tbody.appendChild(fila);
    }
  });
}

