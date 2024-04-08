import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Estilo/estiloCatalogo2.css'; // Importa el archivo CSS

const Catalogo = () => {
    const [productos, setProductos] = useState([]);

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

    return (
        <div>
            <div className="container2" id="container2">
                {productos.map((producto, index) => (
                    <div className="card2" key={index}>
                        <img src={producto.imgCortina} /><br />
                        <h4>{producto.nombre}</h4><br />
                        <h5>Precio: {producto.precio} pesos </h5><br />
                        <button>Comprar</button>
                        <br /><br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalogo;
