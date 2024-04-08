import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contactos = () => {
    const [contactos, setContactos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        obtenerContactos();
    }, []);

    const obtenerContactos = async () => {
        try {
            const respuesta = await axios.get('https://pract-8613e.uc.r.appspot.com/api/Contactos');
            setContactos(respuesta.data);
            setLoading(false);
        } catch (error) {
            console.error('Error al obtener contactos:', error);
            setError('Error al obtener los contactos. Por favor, inténtelo de nuevo más tarde.');
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (

        <div>

            {contactos.length > 0 ? (

                <div className="container2" id="container2">
                    {contactos.map(contacto => (
                        <div className="d1">
                            <center>
                                <div key={contacto._id}>
                                    <strong>Nombre:</strong> {contacto.nombre}<br />
                                    <strong>Correo:</strong> {contacto.correoElectronico}<br />
                                    <strong>Pregunta:</strong> {contacto.pregunta}<br />
                                    <br />
                                </div>
                            </center>
                        </div>
                    ))}

                </div>
            ) : (
                <p>No hay contactos disponibles.</p>
            )}
        </div>

    );
};

export default Contactos;
