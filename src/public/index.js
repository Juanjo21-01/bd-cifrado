// Traer el id para agregar cliente
const d = document,
  $modal = d.getElementById('mi-modal'),
  $desencriptado = d.getElementById('desencriptado'),
  $formActualizar = d.getElementById('form-actualizar'),
  $tabla = d.querySelector('.tabla tbody'),
  $tablaDesencriptada = d.querySelector('#datos-desencriptados tbody'),
  $fragmentos = document.createDocumentFragment();

d.addEventListener('DOMContentLoaded', (e) => {
  // EVENTO AL DAR CLICK
  d.addEventListener('click', (e) => {
    // en el boton de agregar cliente
    if (e.target.matches('#agregar-cliente')) $modal.style.display = 'flex';

    // en el boton de cerrar modal
    if (e.target.matches('#cerrar-modal')) $modal.style.display = 'none';

    // en el boton de mostrar datos desencriptados
    if (e.target.matches('#desencriptar'))
      $desencriptado.style.display = 'block';
  });

  // Cerrar la ventana modal al dar click afuera
  window.addEventListener('click', (e) => {
    if (e.target.matches('#mi-modal')) $modal.style.display = 'none';
  });

  // MOSTRAR INFORMACION DESENCRIPTADA
  async function obtenerDatos(url, tabla) {
    try {
      let respuesta = await fetch(url),
        json = await respuesta.json();

      //   Manipular el Error
      if (!respuesta.ok)
        throw new Error('Ocurrio un Error al Solicitar los datos');

      // INSERTAR LA INFORMACION EN LA TABLA
      json.forEach((el) => {
        const $tr = document.createElement('tr');
        for (const valor in el) {
          const $td = document.createElement('td');
          $td.classList.add('col');
          $td.textContent = el[valor];

          $fragmentos.appendChild($td);
        }

        // Agregamos la clase row e insertamos el fragmento en el elemento tr
        $tr.classList.add('row');
        $tr.appendChild($fragmentos);

        // insertamos la informacion en la tabla
        tabla.appendChild($tr);
      });
    } catch (err) {
      console.log(err);
    }
  }

  // MOSTRAR INFORMACION DESENCRIPTADA
  obtenerDatos('/clientes', $tablaDesencriptada);

  // MOSTRAR INFORMACION ENCRIPTADA
  obtenerDatos('/clientesEnc', $tabla);

  // ALERTAR AL INSERTAR CLIENTE
  window.addEventListener('DOMContentLoaded', () => {
    const mensaje = decodeURIComponent(
      window.location.search.replace('?mensaje=', '')
    );
    if (mensaje) {
      alert(mensaje);

      // Eliminar el parámetro 'mensaje' de la URL
      const urlWithoutParams =
        window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, urlWithoutParams);
    }
  });
});
