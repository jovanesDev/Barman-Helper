import Axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const RecetasContext = createContext()

const RecetasModal = (props) => {


    // State para categoria 

    const [resultado , guardarResultado] = useState ({

        categoria:""
    })

    // Sacando datos del state y guardo en un const

    const { categoria} = resultado;


    // state de recetas 

    const [ recetas, guardarRecetas] = useState([]);


    useEffect(()=>{

        const obtenerResultado = async () => {

            if(categoria === "") return;

                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`

                const response = await Axios(url)
                guardarRecetas(response.data.drinks)
                
                

        }
        obtenerResultado();






    },[resultado])





    return (
      
        <RecetasContext.Provider
        
            value={{

                recetas,
                guardarResultado
            }}
        
        >
            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasModal
