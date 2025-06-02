document.addEventListener('DOMContentLoaded', function() {
  const detalle = JSON.parse(localStorage.getItem('detallePublicacion'));

  if (detalle) {
    const div = document.getElementById('detalle-publicacion');
    div.innerHTML = `
      <p><strong>Título:</strong> ${detalle.titulo}</p>
      <p><strong>Autores:</strong> ${detalle.autores}</p>
      <p><strong>Fecha:</strong> ${detalle.fecha}</p>
      <p><strong>Tipo:</strong> ${detalle.tipo}</p>
      <p><strong>DOI:</strong> ${detalle.doi}</p>
      <p><strong>ISBN:</strong> ${detalle.isbn}</p>
      <p><strong>Archivo:</strong> ${detalle.archivo}</p>
    `;
  } else {
    document.getElementById('detalle-publicacion').textContent = 'No se encontró información.';
  }
});
