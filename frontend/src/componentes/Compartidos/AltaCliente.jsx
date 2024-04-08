import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AltaClientes = () => {
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [telefono, setTelefono] = useState('');
  const [colonia, setColonia] = useState('');
  const [calleNumero, setCalleNumero] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [preguntaSecreta, setPreguntaSecreta] = useState('');
  const [respuestaSecreta, setRespuestaSecreta] = useState('');
  const [imagen, setImagen] = useState(null);
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [preguntasSecretas, setPreguntasSecretas] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchPreguntasSecretas = async () => {
      try {
        const response = await axios.get('https://pract-8613e.uc.r.appspot.com/api/preguntas');
        setPreguntasSecretas(response.data);
      } catch (error) {
        console.error('Error al obtener las preguntas secretas:', error);
      }
    };

    fetchPreguntasSecretas();
  }, []);

  const handleImageChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (contrasena !== confirmarContrasena) {
      setErrorMessage('Las contraseñas no coinciden.');
      return;
    }

    const formData = new FormData();
    formData.append('imagen', imagen);

    try {
      const uploadResponse = await axios.post('https://pract-8613e.uc.r.appspot.com/api/imagenes/upload', formData);
      const imagenUrl = uploadResponse.data.url;

      const clienteData = {
        nombre,
        apaterno: apellidoPaterno,
        amaterno: apellidoMaterno,
        direccion: {
          calle_No_casa: calleNumero,
          colonia,
        },
        usuario,
        contra: contrasena,
        correo: correoElectronico,
        telefono,
        pregunta_secreta: preguntaSecreta,
        respuesta_secreta: respuestaSecreta,
        fotoPerfil: imagenUrl,
      };

      const response = await axios.post('https://pract-8613e.uc.r.appspot.com/api/nuevoCliente', clienteData);
      console.log('Respuesta de la API:', response.data);
      setSuccessMessage('Cliente registrado exitosamente.');
      setNombre('');
      setApellidoPaterno('');
      setApellidoMaterno('');
      setTelefono('');
      setColonia('');
      setCalleNumero('');
      setCorreoElectronico('');
      setPreguntaSecreta('');
      setRespuestaSecreta('');
      setImagen(null);
      setUsuario('');
      setContrasena('');
      setConfirmarContrasena('');
    } catch (error) {
      console.error('Error al registrar cliente:', error);
      setErrorMessage('Hubo un problema al intentar registrar el cliente. Por favor, inténtalo de nuevo.');
    }
  };


  const Validar = (evento) => {
    evento.preventDefault();

    const psswrd = document.getElementById("contrasena").value;
    const psswd = document.getElementById("confirmarContrasena").value;

    if (psswrd === psswd) {
        const tieneMinuscula = /[a-z]/.test(psswrd);
        const tieneMayuscula = /[A-Z]/.test(psswrd);
        const tieneNumero = /\d/.test(psswrd);
        const tieneSimbolo = /[!@#$%^&*(),.?":{}|<>]/.test(psswrd);

        if (tieneMinuscula && tieneMayuscula && tieneNumero && tieneSimbolo) {
            // Continuar con el envío del formulario
        } else {
            alert("Las contraseñas coinciden, pero la contraseña no cumple con los requisitos");
        }
    } else {
        alert("Las contraseñas no coinciden");
    }
};

  return (
    <center>
      <div id="d1" className="d1">
        <h3 className="my-2">Registro</h3>
        <form className='mx-3 my-3' onSubmit={handleSubmit}>
          <div id="formPart1">
            <div className="mb-2">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                className="mt-2 form-control"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre del cliente"
                maxLength="30"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="apellidoPaterno">Apellido Paterno:</label>
              <input
                type="text"
                className="mt-2 form-control"
                id="apellidoPaterno"
                name="apellidoPaterno"
                value={apellidoPaterno}
                onChange={(e) => setApellidoPaterno(e.target.value)}
                placeholder="Apellido paterno"
                maxLength="50"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="apellidoMaterno">Apellido Materno:</label>
              <input
                type="text"
                className="mt-2 form-control"
                id="apellidoMaterno"
                name="apellidoMaterno"
                value={apellidoMaterno}
                onChange={(e) => setApellidoMaterno(e.target.value)}
                placeholder="Apellido materno"
                maxLength="50"
                pattern="[a-zA-Z]+"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="number"
                className="mt-2 form-control"
                id="telefono"
                name="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Teléfono"
                minLength="10"
                maxLength="10"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="colonia">Colonia:</label>
              <input
                type="text"
                className="mt-2 form-control"
                id="colonia"
                name="colonia"
                value={colonia}
                onChange={(e) => setColonia(e.target.value)}
                placeholder="Colonia"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="calleNumero">Calle y NoCasa:</label>
              <input
                type="text"
                className="mt-2 form-control"
                id="calleNumero"
                name="calleNumero"
                value={calleNumero}
                onChange={(e) => setCalleNumero(e.target.value)}
                placeholder="Calle y NoCasa"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="correoElectronico">Correo Electrónico:</label>
              <input
                type="email"
                className="mt-2 form-control"
                id="correoElectronico"
                name="correoElectronico"
                value={correoElectronico}
                onChange={(e) => setCorreoElectronico(e.target.value)}
                placeholder="Correo Electrónico"
                required
              />
            </div>
            <div className="mb-2">
            <select
            id="preguntaSecreta"
            name="preguntaSecreta"
            value={preguntaSecreta}
            onChange={(e) => setPreguntaSecreta(e.target.value)}
            required
          >
            <option value="" disabled>Selecciona una pregunta secreta</option>
            {preguntasSecretas.map(preguntasSecretas => (
              <option key={preguntasSecretas._id} value={preguntasSecretas._id}>{preguntasSecretas.pregunta}</option>
            ))}
          </select><br /><br />
            </div>
            <div className="mb-2">
              <label htmlFor="respuestaSecreta">Respuesta a la pregunta:</label>
              <input
                type="text"
                className="mt-2 form-control"
                id="respuestaSecreta"
                name="respuestaSecreta"
                value={respuestaSecreta}
                onChange={(e) => setRespuestaSecreta(e.target.value)}
                placeholder="Respuesta a la Pregunta Secreta"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="imagen">Imagen:</label><br />
              <input
                type="file"
                id="imagen"
                name="imagen"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="usuario">Usuario:</label>
              <input
                type="text"
                className="mt-2 form-control"
                id="usuario"
                name="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Usuario"
                pattern="[a-zA-Z0-9]+"
                maxLength="20"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="contrasena">Contraseña:</label>
              <input
                type="password"
                className="mt-2 form-control"
                id="contrasena"
                name="contrasena"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                placeholder="Contraseña"
                minLength="8"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="confirmarContrasena">Confirmar Contraseña:</label>
              <input
                type="password"
                className="mt-2 form-control"
                id="confirmarContrasena"
                name="confirmarContrasena"
                value={confirmarContrasena}
                onChange={(e) => setConfirmarContrasena(e.target.value)}
                placeholder="Confirmar Contraseña"
                minLength="8"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary"> Registrar</button>
          </div>
        </form>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </center>
  );
};

export default AltaClientes;

