import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correoElectronico: '',
        pregunta: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Enviar los datos del formulario a la API
            await axios.post('https://pract-8613e.uc.r.appspot.com/api/contactosNuevo', formData);
            // Limpiar el estado del formulario después de enviarlo con éxito
            setFormData({
                nombre: '',
                correoElectronico: '',
                pregunta: ''
            });
            // Lógica adicional después de enviar el formulario, como mostrar un mensaje de éxito
            console.log('Formulario enviado exitosamente');
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            // Mostrar el mensaje de error
            setError('Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <center>
            <div id="contacto" className="levelUp shadow bg-white card p-3">
                <h3 className="my-2">Contacto</h3>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form className='mx-3 my-3' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre">Nombre Completo:</label><br />
                        <input type="text" className="mt-2 form-control"  id="nombre" name="nombre" placeholder="Nombre Completo" value={formData.nombre} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="correoElectronico">Correo Electrónico:</label><br />
                        <input type="email" className="mt-2 form-control" id="correoElectronico" name="correoElectronico" placeholder="Correo Electrónico" value={formData.correoElectronico} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pregunta">Pregunta:</label><br />
                        <textarea className="mt-2 form-control" id="pregunta" name="pregunta" placeholder="Escribe aquí tu pregunta" rows="3" value={formData.pregunta} onChange={handleChange} required></textarea>
                    </div>
                    <div className="mb-2">
                        <button type="submit" className="btn btn-success btn-lg w-100">Enviar</button>
                    </div>
                </form>
            </div>
        </center>
    );
};

export default ContactForm;
