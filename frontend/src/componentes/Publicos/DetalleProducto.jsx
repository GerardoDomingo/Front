// Importaciones necesarias
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Estilo/estiloCatalogo2.css'; // Asume que ya tienes estilos para `.container2` y `.card2`

// Componente para mostrar los detalles del producto
const VentanaDetalles = ({ visible, producto, onClose }) => {
    if (!visible || !producto) return null; // No renderizar si no es visible o no hay producto

    // Aquí puedes diseñar cómo se verá tu ventana de detalles
    return (
        <div className="ventana-detalles-background">
            <div className="ventana-detalles">
                <h2>{producto.nombre}</h2>
                <img src={producto.imgCortina} alt={producto.nombre} /><br />
                <p>Precio: {producto.precio} pesos</p>
                <p>Existencia: {producto.stock} piezas</p>
                <p id='detalles2'>{producto.detalles} pesos</p>
                <button class="btn btn-primary" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

// Componente principal que muestra el catálogo
const Catalogo = () => {
    const [productos, setProductos] = useState([]);
    const [mostrarDetalles, setMostrarDetalles] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await axios.get('https://pract-8613e.uc.r.appspot.com/api/catalogo');
                setProductos(response.data);
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        };
        
        fetchProductos();
    }, []);

    // Función para manejar el clic en el botón Comprar
    const handleMostrarDetalles = (producto) => {
        setProductoSeleccionado(producto);
        setMostrarDetalles(true);
    };

    return (
        <div>
            <div className="container2" id="container2">
                {productos.map((producto, index) => (
                    <div className="card2" key={index}>
                        <img src={producto.imgCortina} alt="Producto" /><br />
                        <h4>{producto.nombre}</h4><br />
                        <h5>Precio: {producto.precio} pesos</h5><br />
                        <button class="btn btn-primary" onClick={() => handleMostrarDetalles(producto)}>Ver</button>
                        <br /><br />
                    </div>
                ))}
            </div>
            <center>
            <VentanaDetalles
                visible={mostrarDetalles}
                producto={productoSeleccionado}
                onClose={() => setMostrarDetalles(false)}
            />
            </center>
        </div>
    );
};

export default Catalogo;

