import React, { useContext, useState } from 'react'
import {RecetasContext} from '../context/RecetasContext'
import RecetaInfo from './RecetaInfo'
import {RecetaPorIdContext} from '../context/RecetaPorIdContext'

const Recetas = () => {

    // use context 

    const {recetas} = useContext(RecetasContext)
    const {guardarId,detalle} = useContext(RecetaPorIdContext)
    


    // state para mostrar Recetas

    const [id , recetaId] = useState('')
    






    return (
        <div className="container">

          {recetas === "" || recetas === null || recetas === undefined? null : null}

           {recetas.map(receta => (

                        <div className="card text-white p-2 bg-primary d-block my-3 " key={receta.idDrink} >
                        <h2 className="card-header  text-center border border-light  pb-3">{receta.strDrink}</h2>
                        <div className="card-body">

                            <div className="row">

                                    <div className="col-md-6">
                                        <img className="img-fluid" src={receta.strDrinkThumb} alt="Coctail Img" />
                                    </div>

                                    

                                    <div className="col-md-6">


                                    

                                 <RecetaInfo 
                                    detalle={detalle}
                                    receta={receta}
                                 />

                                







                                        
                                        

                                        
                                    </div>

                                    


                            </div>

                        

                        </div>
                        </div>
           ))}
            
        </div>
    )
}

export default Recetas
