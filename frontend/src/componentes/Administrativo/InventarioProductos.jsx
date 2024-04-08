import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CatalogoProductos = () => {
    const [productos, setProductos] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);

    // Estados para la edición de un producto
    const [nombre, setNombre] = useState('');
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [precio, setPrecio] = useState(0);
    const [stock, setStock] = useState(0);
    const [costo, setCosto] = useState(0);
    const [detalles, setDetalles] = useState('');
    const [imgCortina, setImgCortina] = useState('');
    const [ID, setID] = useState('');
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

    useEffect(() => {
        obtenerProductos();
    }, []);

    const obtenerProductos = async () => {
        try {
            const respuesta = await axios.get('https://pract-8613e.uc.r.appspot.com/api/catalogo');
            setProductos(respuesta.data);
        } catch (error) {
            console.error('Hubo un error al obtener los productos: ', error);
        }
    };

    const abrirModalParaActualizar = (producto) => {
        if (producto && producto._id) {
            setID(producto._id);
            setNombre(producto.nombre);
            setCategoriaSeleccionada(producto.categoria); // Ajustado para manejar el ID de categoría
            setPrecio(producto.precio);
            setStock(producto.stock);
            setCosto(producto.costo);
            setDetalles(producto.detalles);
            setImgCortina(producto.imgCortina);
            setMostrarModal(true);
        } else {
            console.error('Producto no válido para actualizar:', producto);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productoActualizado = {
            nombre,
            categoria: categoriaSeleccionada, // Asumir que esto se envía como un ID o ajustar según sea necesario
            precio,
            stock,
            costo,
            detalles,
            imgCortina
        };
        try {
            await axios.put(`https://pract-8613e.uc.r.appspot.com/api/catalogoactualizar/${ID}`, productoActualizado);
            setMostrarModal(false);
            obtenerProductos(); // Recarga la lista de productos
        } catch (error) {
            console.error('Error actualizando producto: ', error);
        }
    };

    const eliminarProducto = async (id) => {
        try {
            await axios.delete(`https://pract-8613e.uc.r.appspot.com/api/catalogodelet/${id}`);
            obtenerProductos(); // Recargar la lista tras eliminar
        } catch (error) {
            console.error('Hubo un error al eliminar el producto: ', error);
        }
    };

    return (
        <div>
            {/* Lista de productos */}
            <div>
                <h2>CONSULTA PRODUCTOS</h2>
                <div className="centro2">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Tipo</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Costo</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto) => (
                                <tr key={producto._id}>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.tipo}</td>
                                    <td>{producto.precio}</td>
                                    <td>{producto.stock}</td>
                                    <td>{producto.costo}</td>
                                    <td>
                                        <button onClick={() => abrirModalParaActualizar(producto)}>Actualizar</button>
                                        <button onClick={() => eliminarProducto(producto._id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal para edición */}
            {mostrarModal && (
                <center>
                    <div style={{ top: '5%', left: '30%', padding: '10px' }}>
                        <div className='d1'>
                            <form onSubmit={handleSubmit}>
                                <label>Nombre:</label>
                                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} /><br />
                                <label htmlFor="categoria">Categoría:</label><br />
                                <select
                                    id="categoria"
                                    name="categoria"
                                    onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                                    value={categoriaSeleccionada}
                                    required
                                >
                                    <option value="">Selecciona una categoría</option>
                                    {categorias.map((categoria) => (
                                        <option key={categoria._id} value={categoria._id}>
                                            {categoria.nombre}
                                        </option>
                                    ))}
                                </select><br /><br />
                                <label>Precio:</label>
                                <input type="number" value={precio} onChange={(e) => setPrecio(parseFloat(e.target.value))} /><br />
                                <label>Stock:</label>
                                <input type="number" value={stock} onChange={(e) => setStock(parseInt(e.target.value))} /><br />
                                <label>Costo:</label>
                                <input type="number" value={costo} onChange={(e) => setCosto(parseFloat(e.target.value))} /><br />
                                <label>Detalles:</label>
                                <textarea value={detalles} onChange={(e) => setDetalles(e.target.value)} /><br />
                                <label>Imagen (URL):</label>
                                <input type="text" value={imgCortina} onChange={(e) => setImgCortina(e.target.value)} /><br />
                                <button type="submit">Actualizar Producto</button>
                                <button onClick={() => setMostrarModal(false)}>Cerrar</button>
                            </form>
                        </div>
                    </div>
                </center>
            )}
        </div>
    );
};

export default CatalogoProductos;
