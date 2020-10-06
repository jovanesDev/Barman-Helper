import React from 'react'
import Formulario from './Formulario'

const Header = () => {
    return (

    <div className="jumbotron py-3">
    <h2 className="display-4 text-center my-4">Barman-Helper</h2>
    <h5 className="text-muted text-center">"Encotra los ingredientes y la forma de preparar tu bebida favorita"</h5>

        <div className="mx-auto mt-3">

            <Formulario/>
        </div>


    </div>
        
    )
}

export default Header

