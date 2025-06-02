let publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];
let archivoSeleccionadoNombre = '';

document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();
  agregarPublicacion();
});

function archivoSeleccionado(event) {
  const archivo = event.target.files[0];
  if (archivo) {
    archivoSeleccionadoNombre = archivo.name;
    alert('Archivo seleccionado: ' + archivo.name);
  } else {
    archivoSeleccionadoNombre = '';
  }
}

function agregarPublicacion() {
  const titulo = document.getElementById('titulo').value;
  const autores = document.getElementById('autores').value;
  const fecha = document.getElementById('fecha').value;
  const tipo = document.getElementById('tipo_publicacion').value;
  const doi = document.getElementById('doi').value;
  const isbn = document.getElementById('isbn').value;

  const nuevaPublicacion = {
    id: Date.now(),  // ID único para referencia
    titulo, autores, fecha, tipo, doi, isbn,
    archivo: archivoSeleccionadoNombre || 'Sin archivo'
  };

  publicaciones.push(nuevaPublicacion);
  localStorage.setItem('publicaciones', JSON.stringify(publicaciones));

  mostrarPublicaciones();
  document.getElementById('formulario').reset();
  archivoSeleccionadoNombre = '';
}

function mostrarPublicaciones() {
  const tbody = document.getElementById('tabla-publicaciones');
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
      <td>
        <button onclick="eliminarPublicacion(${index})">Eliminar</button><br></br>
        <button onclick="verDetalles(${pub.id})">Ver Detalles</button>
      </td>
      <td>${pub.archivo}</td>
    `;
    tbody.appendChild(fila);
  });
}

function eliminarPublicacion(index) {
  publicaciones.splice(index, 1);
  localStorage.setItem('publicaciones', JSON.stringify(publicaciones));
  mostrarPublicaciones();
}

//Nueva función para Ver Detalles
function verDetalles(id) {
  localStorage.setItem('detallePublicacion', JSON.stringify(publicaciones.find(p => p.id === id)));
  window.location.href = 'detalle.html';
}

mostrarPublicaciones();
