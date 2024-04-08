import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AltaProductos = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [tipo, setTipo] = useState('');
  const [stock, setStock] = useState('');
  const [costo, setCosto] = useState('');
  const [detalles, setDetalles] = useState('');
  const [imagen, setImagen] = useState(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await axios.get('https://pract-8613e.uc.r.appspot.com/api/categorias');
        setCategorias(response.data);
      } catch (error) {
        console.error('Hubo un problema al cargar las categorías:', error);
      }
    };

    fetchCategorias();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'nombre':
        setNombre(value);
        break;
      case 'precio':
        setPrecio(value);
        break;
      case 'tipo':
        setTipo(value);
        break;
      case 'stock':
        setStock(value);
        break;
      case 'costo':
        setCosto(value);
        break;
      case 'detalles':
        setDetalles(value);
        break;
      case 'categoria':
        setCategoriaSeleccionada(value);
        break;
      default:
        break;
    }
  };

  const handleImageChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imagen) {
      setErrorMessage('Por favor, seleccione una imagen para el producto.');
      return;
    }

    const formData = new FormData();
    formData.append('imagen', imagen);

    try {
    const uploadResponse = await axios.post('https://pract-8613e.uc.r.appspot.com/api/imagenes/upload', formData);
    const imagenUrl = uploadResponse.data.url;

    const productoData = {
      nombre: nombre,
      categoria: categoriaSeleccionada,
      tipo: tipo,
      precio: parseFloat(precio),
      stock: parseInt(stock, 10),
      costo: parseFloat(costo),
      detalles: detalles,
      imgCortina: imagenUrl,
    };
    
      await axios.post('https://pract-8613e.uc.r.appspot.com/api/catalogopost', productoData);
      setSuccessMessage('Producto creado exitosamente.');
      // Limpiar el formulario después de la creación exitosa
      setNombre('');
      setCategoriaSeleccionada('');
      setTipo('');
      setPrecio('');
      setStock('');
      setCosto('');
      setDetalles('');
      setImagen(null);

    } catch (error) {
      console.error('Hubo un error al guardar el producto', error);
      setErrorMessage('Error al guardar el producto. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <>
      <center>
        <div className="d1">
          <form className="form" onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="d3">
              <h2>Agregar Productos</h2>
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                onChange={handleInputChange}
                value={nombre}
                required
              /> <br />
              <label htmlFor="categoria">Categoría:</label><br />
              <select
                id="categoria"
                name="categoria"
                onChange={handleInputChange}
                value={categoriaSeleccionada}
                required
              >
                <option value="">Selecciona una categoría</option><br />
                {categorias.map((categoria) => (
                  <option key={categoria._id} value={categoria._id}>
                    {categoria.nombre}
                  </option>
                ))}
              </select><br /><br />

              <label htmlFor="tipo">Tipo:</label><br />
              <input
                type="text"
                id="tipo"
                name="tipo"
                onChange={handleInputChange}
                value={tipo}
                required
              />

              <label htmlFor="precio">Precio:</label><br />
              <input
                type="number"
                id="precio"
                name="precio"
                onChange={handleInputChange}
                value={precio}
                required
              />

              <label htmlFor="stock">Stock:</label><br />
              <input
                type="number"
                id="stock"
                name="stock"
                onChange={handleInputChange}
                value={stock}
                required
              />

              <label htmlFor="costo">Costo:</label><br />
              <input
                type="number"
                id="costo"
                name="costo"
                onChange={handleInputChange}
                value={costo}
                required
              />

              <label htmlFor="detalles">Detalles:</label><br />
              <textarea
                id="detalles"
                name="detalles"
                onChange={handleInputChange}
                value={detalles}
                required
              /><br />

              <label htmlFor="imagen">Imagen:</label><br />
              <input
                type="file"
                id="imagen"
                name="imagen"
                accept="image/*"
                onChange={handleImageChange}
                required
              />

              {successMessage && <div className="success-message">{successMessage}</div>}
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              <button type="submit" className="submit-button">Guardar</button>
            </div>
          </form>
        </div>
      </center>
    </>
  );
};

export default AltaProductos;