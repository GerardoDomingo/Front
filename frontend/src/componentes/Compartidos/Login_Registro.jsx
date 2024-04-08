import React, { useState, useEffect } from 'react';
import '../Estilo/FormLoginRegis.css'; // Importa el archivo CSS
import axios from 'axios';

const FormRegistro = () => {

    const [preguntas, setPreguntas] = useState([]);
    const [imagen, setImagen] = useState(null);

    const [formData, setFormData] = useState({
        txtNombre: '',
        txtApaterno: '',
        txtAmaterno: '',
        txtTelefono: '',
        txtColonia: '',
        txtCalle: '',
        txtCorreoE: '',
        txtPreguntaSecreta: '',
        txtrespuesta: '',
        txtusuario: '',
        txtpassword: '',
        txtpassword2: ''
    });

    useEffect(() => {
        const fetchPreguntas = async () => {
            try {
                const res = await axios.get('https://pract-8613e.uc.r.appspot.com/api/preguntas');
                setPreguntas(res.data);
            } catch (error) {
                console.error('Error al obtener las preguntas:', error);
            }
        };

        fetchPreguntas();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
        if (e.target.files.length > 0) {
            setImagen(e.target.files[0]);
        }
    };

    const handleSubmitRegistro = async (e) => {
        console.log(e.target.name)
        e.preventDefault();

        if (!imagen) {
            alert('Por favor, selecciona una imagen.');
            return;
        }

        const formData2 = new FormData();
        formData2.append('imagen', imagen);

        try {
            const uploadResponse = await axios.post('https://pract-8613e.uc.r.appspot.com/api/imagenes/upload', formData2);
            const fotoPerfil = uploadResponse.data.url;

            const formDataWithImage = {
                ...formData,
                fotoPerfil: fotoPerfil
            };

            const response = await axios.post('https://pract-8613e.uc.r.appspot.com/api/nuevoCliente', formDataWithImage);

            if (response.status === 201) {
                console.log('Registro exitoso');
            } else {
                console.error('Error al registrar');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };


    useEffect(() => {
        const signup = document.getElementById('signup');
        const login = document.getElementById('login');

        if (signup && login) {
            signup.onclick = function (e) {
                e.target.className = e.target.className.replace('levelDown', 'levelUp');
                login.className = login.className.replace('levelUp', 'levelDown');
            };

            login.onclick = function (e) {
                e.target.className = e.target.className.replace('levelDown', 'levelUp');
                signup.className = signup.className.replace('levelUp', 'levelDown');
            };
        }
    }, []); // El segundo argumento de useEffect especifica las dependencias, que en este caso está vacío para que solo se ejecute una vez

    const Parte1 = () => {
        document.getElementById('formPart1').style.display = 'block';
        document.getElementById('formPart2').style.display = 'none';
        document.getElementById('formPart3').style.display = 'none';
        document.getElementById('formPart4').style.display = 'none';
    };

    const Parte2 = () => {
        document.getElementById('formPart2').style.display = 'block';
        document.getElementById('formPart1').style.display = 'none';
        document.getElementById('formPart3').style.display = 'none';
        document.getElementById('formPart4').style.display = 'none';
    };

    const Parte3 = () => {
        document.getElementById('formPart3').style.display = 'block';
        document.getElementById('formPart1').style.display = 'none';
        document.getElementById('formPart2').style.display = 'none';
        document.getElementById('formPart4').style.display = 'none';
    };

    const Parte4 = () => {
        document.getElementById('formPart4').style.display = 'block';
        document.getElementById('formPart1').style.display = 'none';
        document.getElementById('formPart2').style.display = 'none';
        document.getElementById('formPart3').style.display = 'none';
    };

    

    const handleSubmitInicioSesion = async (event) => {
        event.preventDefault();

        const usuario = document.getElementById('usuarioI').value;
        const contraseña = document.getElementById('passwordI').value;

        try {
            // Intenta iniciar sesión como cliente
            const responseClientes = await fetch('https://pract-8613e.uc.r.appspot.com/api/clientes/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cli_usuario: usuario,
                    cli_contra: contraseña
                })
            });

            if (responseClientes.ok) {
                const userData = await responseClientes.json();
                localStorage.setItem('userData', JSON.stringify(userData));
                window.location.href = '/Usuario';
            } else {
                console.log('esta bucando empleado');
                // Si no se encuentra en clientes, intenta iniciar sesión como empleado
                const responseEmpleados = await fetch('https://pract-8613e.uc.r.appspot.com/api/empleados/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        E_usuario: usuario,
                        E_contra: contraseña
                    })
                });

                if (responseEmpleados.ok) {
                    console.log('entro');
                    const userData = await responseEmpleados.json();
                    localStorage.setItem('userData', JSON.stringify(userData));
                    window.location.href = '/Admin';
                } else {
                    // Si ninguno de los intentos tiene éxito, muestra un mensaje de error
                    alert('Error al iniciar sesión. Por favor, revisa tus credenciales.');
                }
            }
        } catch (error) {
            alert('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <center>
            <div className='d1'>
                <h3 className="my-2">Inicio de Sesión</h3>
                <form className='mx-3 my-3' onSubmit={handleSubmitInicioSesion}>
                    <div className="mb-3">
                        <label htmlFor="usuario">Usuario:</label><br />
                        <input type="text" className="mt-2 form-control" id="usuarioI" name="txtusuario" placeholder="Usuario" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Contraseña:</label><br />
                        <input type="password" className="mt-2 form-control" id="passwordI" name="txtpassword" placeholder="Contraseña" required />
                    </div>
                    <div className="mb-3">
                    <button type="submit" class="btn btn-primary"> Iniciar Sesión</button>
                    </div>
                </form>
            </div>
        </center>
    );
};

export default FormRegistro;
