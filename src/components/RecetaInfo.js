import React,{useContext,useState,Fragment} from 'react'
import {RecetaPorIdContext} from '../context/RecetaPorIdContext'



const RecetaInfo = ({receta}) => {


    const {detalle,guardarId} = useContext(RecetaPorIdContext)
    const [mostrar , guardarMostrar] = useState(false)


    const mostratIngedientes = detalle => {

        let ingredientes = [];


        for( let i=1 ; i<16 ; i++ ) {

            if(detalle[`strIngredient${i}`]) {

                ingredientes.push(

                <li className="mx-auto text-center">{detalle[`strIngredient${i}`]} // {detalle[`strMeasure${i}`]}</li> 
                )

            }

        }
        
        return ingredientes



    }


    return (
        <div>

            <button
                className="btn-block btn my-5 btn-secondary"
                onClick={()=> (guardarId(receta.idDrink) , guardarMostrar(true)) }
            >
            Ver Detalles
            </button>


            { mostrar ? 
            
            <Fragment>

            <div className=" d-block mt-2">
            <h3  className="card-title  text-center mb-3">Ingredientes</h3>
            <ol className="d-block">
                {mostratIngedientes(detalle)}
            </ol>
            </div>

            <div className=" d-block mt-5 ">
            <h3 className="card-title  text-center mb-3">Como Preparar</h3>
            {detalle.strInstructions ? <p className="text-center">{detalle.strInstructions}</p> : <p className="bg-danger text-center text-light">No hay informacion </p>}
            </div>

            </Fragment>


            :
            null

            }


            
                            



        </div>
    )
}

export default RecetaInfo
