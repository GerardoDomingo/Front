import React from 'react';

import '../Css/style.css';

function Pie() {
    return (

        <footer>
            <center>
                <div class="container-fluid footer bg-light py-5" >
                    <div class="container text-center py-5" >
                        <div class="row" >
                            <div class="col-12 mt-2 mb-4">
                                <div class="row" >
                                    <div class="col-sm-6 text-center text-sm-right border-right mb-3 mb-sm-0">
                                        <h5 class="font-weight-bold mb-2" >Ponerse En Contacto</h5>
                                        <p class="mb-2" >Huejutla de reyes, Hidalgo</p>
                                        <p class="mb-0">7711253092</p>
                                    </div>
                                    <div class="col-sm-6 text-center text-sm-left">
                                        <h5 class="font-weight-bold mb-2" >Horario de apertura</h5>
                                        <p class="mb-2" >Domingo -Viernes</p>
                                        <p class="mb-0" >Sabado : Cerrado</p>
                                    </div>
                                </div>
                                <br /><br />
                                <div className="d-inline-flex align-items-center">
                                        <a className="text-black pr-3" href="/Usuario/contacto" >CONTACTO</a>
                                        <span className="text-black">|</span>
                                        <a className="text-black px-3" href="/Usuario/nosotros" >QUIENES SOMOS</a>
                                        <span className="text-black">|</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </footer >


    );
}

export default Pie;
