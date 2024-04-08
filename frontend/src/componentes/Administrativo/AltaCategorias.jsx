import React, { useState } from 'react';
import axios from 'axios';
import '../Estilo/estilosRegistroPublica.css';

const AltaCategorias = () => {
  const [categoriaNombre, setCategoriaNombre] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://pract-8613e.uc.r.appspot.com/api/categoriaspost', { nombre: categoriaNombre });
      if (res.status === 201) {
        setCategoriaNombre('');
        setErrorMessage('');
      } else {
        throw new Error('Error al agregar categoría.');
      }
    } catch (error) {
      console.error('Error agregando categoría:', error);
      setErrorMessage('Error al agregar categoría. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <center>
      <div className="d1">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Altas De Categorías</h2><br /><br />
          <label htmlFor="Nombre">Nombre De La Categoría:</label><br />
          <input
            type="text"
            id="Nombre"
            name="txtCategoria"
            value={categoriaNombre}
            onChange={(e) => setCategoriaNombre(e.target.value)}
            required
          /><br /><br />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button type="submit">Guardar</button>
        </form>
      </div>
    </center>
  );
};

export default AltaCategorias;
