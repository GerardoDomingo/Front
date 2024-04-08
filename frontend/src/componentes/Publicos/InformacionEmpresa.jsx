import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Estilo/InfoNegocio.css'; // Asegúrate de tener tu archivo CSS con el estilo correspondiente

const Plantilla = () => {
    const [mision, setMision] = useState('');
    const [vision, setVision] = useState('');
    const [politicas, setPoliticas] = useState([]);

    useEffect(() => {
        const fetchDatos = async () => {
            try {
                const resMision = await axios.get('http://localhost:3001/api/InfoEmpresa/mision');
                const resVision = await axios.get('http://localhost:3001/api/infoEmpresa/vision');
                const resPoliticas = await axios.get('http://localhost:3001/api/infoEmpresa/politicas');

                if (resMision.data && resMision.data.valor) {
                    setMision(resMision.data.valor);
                }
                if (resVision.data && resVision.data.valor) {
                    setVision(resVision.data.valor);
                }
                if (resPoliticas.data && resPoliticas.data.valor) {
                    // Asumiendo que las políticas podrían ser un array o texto. Ajusta según tu caso real.
                    setPoliticas(Array.isArray(resPoliticas.data.valor) ? resPoliticas.data.valor : [resPoliticas.data.valor]);
                }
            } catch (error) {
                console.error('Error al obtener los datos de la empresa:', error);
            }
        };

        fetchDatos();
    }, []);

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h2>CORTI MUNDO</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        {/* Sección Misión */}
                        <div className="col-md-6">
                            <h3>Misión</h3>
                            <p>{mision}</p>
                        </div>
                        {/* Sección Visión */}
                        <div className="col-md-6">
                            <h3>Visión</h3>
                            <p>{vision}</p>
                        </div>
                    </div>
                    {/* Div para políticas del negocio */}
                    <div className="politicas">
                        <h3>Políticas del Negocio</h3>
                        <ul>
                            {politicas.map((politica, index) => (
                                <li key={index}>{politica}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plantilla;
