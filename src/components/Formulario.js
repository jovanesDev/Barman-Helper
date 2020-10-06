import React, { useContext, useState } from 'react'
import {CategoriaContext} from '../context/CategoriasContext'
import {RecetasContext} from '../context/RecetasContext'

const Formulario = () => {

    //States

    //State de Select

    const [select , guardarSelect] = useState({

        categoria:''
    })


    // Extraer los datos 

    const { categoria} = select;




    // Functions


    // handleChange functions

    const handleChange = e => {

        guardarSelect({

            ...select,
            [e.target.name]:e.target.value
        })
    }

    // handleSubmit Function

    const handleSubmit = e => {

        e.preventDefault();
        guardarResultado(select)

    }



    
    // use Context 

    const {busquedas} = useContext (CategoriaContext)
    const {guardarResultado} = useContext (RecetasContext)


    return (

        <div className="jumbotron bg-dark py-3 mt-5 ">

            <h6 className='text-center text-light my-5'>Selecciona una categoria para obtener receta</h6>

            <div className='mx-auto my-2'>

                <form
                 className="border border-dark"
                 onSubmit={handleSubmit}
                >
                    <div className="row">

                        <div className="col-md-6 offset-md-2 mb-2 ">

                            <select
                             className='form-control text-center'
                             name='categoria'
                             value={categoria}
                             onChange={handleChange}
                            >
                                <option  value="" >-----Seleccione-----</option>
                                
                                {busquedas.map( busqueda => (

                                <option value={busqueda.strCategory} key={busqueda.strCategory}>{busqueda.strCategory}</option>
                                ))}
                               

                            </select>

                        </div>
                        <div className="col-md-2">
                            <input
                                className="btn text-light py-2  btn-outline-info btn-block"
                                value="BUSCAR"
                                type='submit'
                                onSubmit={handleSubmit}

                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>

      
    )
}

export default Formulario
