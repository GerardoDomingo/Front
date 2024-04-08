import React, { useState } from 'react';
import axios from 'axios';

const AltaDeIot = () => {
  const [nombre, setNombre] = useState('');
  const [claveCortinero, setClaveCortinero] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const userData = JSON.parse(localStorage.getItem('userData'));

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'nombre') {
      setNombre(value);
    } else if (name === 'claveCortinero') {
      setClaveCortinero(value);
    } 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    const dispositivoIotData = {
      nombre: nombre,
      clave_cortinero: claveCortinero,
      cliente_id: userData._id,
    };

    try {
      await axios.post('https://pract-8613e.uc.r.appspot.com/api/dispositivoiotpost', dispositivoIotData);
      setSuccessMessage('Dispositivo IoT creado exitosamente.');
      // Limpiar el formulario después de la creación exitosa
      setNombre('');
      setClaveCortinero('');
   
    } catch (error) {
      console.error('Hubo un error al guardar el dispositivo IoT', error);
      setErrorMessage('Error al guardar el dispositivo IoT. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <>
      <center>
        <div className="d1">
          <form className="form" onSubmit={handleSubmit}>
            <div className="d3">
              <h2>Agregar Dispositivo IoT</h2>
              <label htmlFor="nombre">Nombre del Dispositivo:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                onChange={handleInputChange}
                value={nombre}
                required
              /><br />

              <label htmlFor="claveCortinero">Clave de Cortinero:</label>
              <input
                type="text"
                id="claveCortinero"
                name="claveCortinero"
                onChange={handleInputChange}
                value={claveCortinero}
                required
              /><br />

              {successMessage && <div className="success-message">{successMessage}</div>}
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              <button type="submit" class="btn btn-primary" className="submit-button">Guardar</button>
            </div>
          </form>
        </div>
      </center>
    </>
  );
};

export default AltaDeIot;
