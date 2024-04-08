import React, { useState, useEffect } from 'react';
import axios from 'axios';
import imagen2 from '../img/AgregarUsuario.png';

const AltaEmpleados = () => {
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [telefono, setTelefono] = useState('');
  const [puesto, setPuesto] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('Empleado');
  const [correo, setCorreo] = useState('');
  const [preguntaSecreta, setPreguntaSecreta] = useState('');
  const [respuestaSecreta, setRespuestaSecreta] = useState('');
  const [calleNumero, setCalleNumero] = useState('');
  const [colonia, setColonia] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [preguntas, setPreguntas] = useState([]);


  useEffect(() => {
    const fetchPreguntas = async () => {
      try {
        const res = await axios.get('https://pract-8613e.uc.r.appspot.com/api/preguntas');
        setPreguntas(res.data);
      } catch (error) {
        console.error('Error al obtener las preguntas:', error);
      }
    };

    fetchPreguntas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const empleadoData = {
      E_nombre: nombre,
      E_apaterno: apellidoPaterno,
      E_amaterno: apellidoMaterno,
      E_telefono: telefono,
      E_puesto: puesto,
      E_usuario: usuario,
      E_contra: contrasena,
      E_usuarioTipo: tipoUsuario,
      E_correo: correo,
      E_pregunta_secreta: preguntaSecreta,
      E_respuesta_secreta: respuestaSecreta,
      E_direccion: {
        E_calle_No_casa: calleNumero,
        E_colonia: colonia,
      }
    };

    try {
      const res = await axios.post('https://pract-8613e.uc.r.appspot.com/api/nuevoEmpleado', empleadoData);
      if (res.status === 200) {
        setSuccessMessage('Empleado agregado correctamente.');
        setNombre('');
        setApellidoPaterno('');
        setApellidoMaterno('');
        setTelefono('');
        setPuesto('');
        setUsuario('');
        setContrasena('');
        setTipoUsuario('Empleado');
        setCorreo('');
        setPreguntaSecreta('');
        setRespuestaSecreta('');
        setCalleNumero('');
        setColonia('');
      } else {

      }
    } catch (error) {
      console.error('Error al agregar empleado:', error);
      setErrorMessage('Error interno del servidor.');
    }
  };

  return (
    <center>
      <div className="d1">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Alta de Empleados</h2>
          <center>
            <img src={imagen2} alt="Imagen" className="img23" />
          </center><br /><br />
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          /><br />
          <label htmlFor="apellidoPaterno">Apellido Paterno:</label>
          <input
            type="text"
            id="apellidoPaterno"
            name="apellidoPaterno"
            value={apellidoPaterno}
            onChange={(e) => setApellidoPaterno(e.target.value)}
            required
          /><br />
          <label htmlFor="apellidoMaterno">Apellido Materno:</label>
          <input
            type="text"
            id="apellidoMaterno"
            name="apellidoMaterno"
            value={apellidoMaterno}
            onChange={(e) => setApellidoMaterno(e.target.value)}
            required
          /><br />
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          /><br />
          <label htmlFor="puesto">Puesto:</label>
          <input
            type="text"
            id="puesto"
            name="puesto"
            value={puesto}
            onChange={(e) => setPuesto(e.target.value)}
            required
          /><br />
          <label htmlFor="usuario">Usuario:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          /><br />
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          /><br />
          <label htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          /><br />
          <label htmlFor="preguntaSecreta">Pregunta Secreta:</label>
          <select
            id="preguntaSecreta"
            name="preguntaSecreta"
            value={preguntaSecreta}
            onChange={(e) => setPreguntaSecreta(e.target.value)}
            required
          >
            <option value="" disabled>Selecciona una pregunta secreta</option>
            {preguntas.map(pregunta => (
              <option key={pregunta._id} value={pregunta._id}>{pregunta.pregunta}</option>
            ))}
          </select><br /><br />
          <label htmlFor="respuestaSecreta">Respuesta Secreta:</label>
          <input
            type="text"
            id="respuestaSecreta"
            name="respuestaSecreta"
            value={respuestaSecreta}
            onChange={(e) => setRespuestaSecreta(e.target.value)}
            required
          /><br />
          <label htmlFor="calleNumero">Calle y Número:</label>
          <input
            type="text"
            id="calleNumero"
            name="calleNumero"
            value={calleNumero}
            onChange={(e) => setCalleNumero(e.target.value)}
            required
          /><br />
          <label htmlFor="colonia">Colonia:</label>
          <input
            type="text"
            id="colonia"
            name="colonia"
            value={colonia}
            onChange={(e) => setColonia(e.target.value)}
            required
          /><br />
          {successMessage && <div className="success-message">{successMessage}</div>}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button type="submit" className="submit-button">Guardar</button>
        </form>
      </div>
    </center>
  );
};

export default AltaEmpleados;
