import { getConnection, sql, queries } from '../database/index.js';
import path from 'path';
import CryptoJS from 'crypto-js';

// Mostrar pagina principal
export const pagina = async (req, res) => {
  try {
    // FRONTEND
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Mostrar los clientes Desencriptados 
export const listarClientes = async (req, res) => {
  try {
    const pool = await getConnection();
    const resultado = await pool.request().query(queries.listarClientes);

    // CLAVE PARA DESENCRIPTAR
    const claveEncriptado = 'pistolero21';

    // JSON RECIBIDO DE LA BD
    const datosEncriptados = resultado.recordset;

    // Desencriptar los datos
    const datosDesencriptados = datosEncriptados.map((datoEncriptado) => {
      const datoDesencriptado = {
        ...datoEncriptado,
      };

      // Desencriptar cada campo encriptado
      datoDesencriptado.nombre_cliente = CryptoJS.AES.decrypt(
        datoEncriptado.nombre_cliente,
        claveEncriptado
      ).toString(CryptoJS.enc.Utf8);

      datoDesencriptado.apellido_cliente = CryptoJS.AES.decrypt(
        datoEncriptado.apellido_cliente,
        claveEncriptado
      ).toString(CryptoJS.enc.Utf8);

      datoDesencriptado.dpi_cliente = CryptoJS.AES.decrypt(
        datoEncriptado.dpi_cliente,
        claveEncriptado
      ).toString(CryptoJS.enc.Utf8);

      datoDesencriptado.email_cliente = CryptoJS.AES.decrypt(
        datoEncriptado.email_cliente,
        claveEncriptado
      ).toString(CryptoJS.enc.Utf8);

      datoDesencriptado.direccion_cliente = CryptoJS.AES.decrypt(
        datoEncriptado.direccion_cliente,
        claveEncriptado
      ).toString(CryptoJS.enc.Utf8);

      datoDesencriptado.telefono_cliente = CryptoJS.AES.decrypt(
        datoEncriptado.telefono_cliente,
        claveEncriptado
      ).toString(CryptoJS.enc.Utf8);

      return datoDesencriptado;
    });

    // Enviar los datos desencriptados como respuesta
    res.json(datosDesencriptados);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Mostrar los clientes Encriptados
export const listarClientesEncriptados = async (req, res) => {
  try {
    const pool = await getConnection();
    const resultado = await pool.request().query(queries.listarClientes);

    // JSON RECIBIDO DE LA BD
    res.json(resultado.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Insertar clientes Encriptados
export const insertarClientes = async (req, res) => {
  const { nombre, apellido, dpi, email, direccion, telefono } = req.body;

  // CLAVE PARA ENCRIPTAR Y PODER DESENCRIPTAR
  const claveEncriptado = 'pistolero21';

  // Encriptar los campos uno por uno
  const nombreEncriptado = CryptoJS.AES.encrypt(
    nombre,
    claveEncriptado
  ).toString();
  const apellidoEncriptado = CryptoJS.AES.encrypt(
    apellido,
    claveEncriptado
  ).toString();
  const dpiEncriptado = CryptoJS.AES.encrypt(dpi, claveEncriptado).toString();
  const emailEncriptado = CryptoJS.AES.encrypt(
    email,
    claveEncriptado
  ).toString();
  const direccionEncriptada = CryptoJS.AES.encrypt(
    direccion,
    claveEncriptado
  ).toString();
  const telefonoEncriptado = CryptoJS.AES.encrypt(
    telefono,
    claveEncriptado
  ).toString();

  if (
    nombre == null ||
    apellido == null ||
    dpi == null ||
    email == null ||
    direccion == null ||
    telefono == null
  )
    return res.status(400).json({ msg: 'No se enviaron todos los datos' });

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input('nombre', sql.NVarChar, nombreEncriptado)
      .input('apellido', sql.NVarChar, apellidoEncriptado)
      .input('dpi', sql.NVarChar, dpiEncriptado)
      .input('email', sql.NVarChar, emailEncriptado)
      .input('direccion', sql.NVarChar, direccionEncriptada)
      .input('telefono', sql.NVarChar, telefonoEncriptado)
      .query(queries.crearCliente);

    const mensaje = encodeURIComponent('¡Se Insertó Correctamente al Cliente!');
    res.redirect('/?mensaje=' + mensaje);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Actualizar clientes
export const actualizarCliente = async (req, res) => {
  const { nombre, apellido, dpi, email, direccion, telefono } = req.body;
  const { id } = req.params;

  if (
    nombre == null ||
    apellido == null ||
    dpi == null ||
    email == null ||
    direccion == null ||
    telefono == null
  )
    return res.status(400).json({ msg: 'No se enviaron todos los datos' });

  const pool = await getConnection();

  await pool
    .request()
    .input('nombre', sql.NVarChar, nombre)
    .input('apellido', sql.NVarChar, apellido)
    .input('dpi', sql.Char, dpi)
    .input('email', sql.NVarChar, email)
    .input('direccion', sql.NVarChar, direccion)
    .input('telefono', sql.Char, telefono)
    .input('id', sql.Int, id)
    .query(queries.actualizarCliente);

  const mensaje = encodeURIComponent('¡Se Actualizó Correctamente al Cliente!');
  res.redirect('/?mensaje=' + mensaje);
};

// Eliminar clientes
export const eliminarCliente = async (req, res) => {
  const { id } = req.params.id;

  const pool = await getConnection();
  await pool.request().input('id', id).query(queries.eliminarCliente);

  const mensaje = encodeURIComponent('¡Se Elimino Correctamente al Cliente!');
  res.redirect('/?mensaje=' + mensaje);
};
