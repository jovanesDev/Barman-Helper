import React, { createContext, useEffect, useState } from 'react'
import Axios from 'axios';



export const RecetaPorIdContext = createContext();


const RecetaPorIdProvider = (props) => {



    const [id , guardarId] = useState(null)

    const [detalle , guardarDetalle] = useState({})



    useEffect(()=>{


        const obtnerDetalle = async () => { 

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            const response = await Axios(url)

            if(response.data.drinks === undefined){

                return null
            }else{
                guardarDetalle(response.data.drinks[0])
            }

            

        }
        obtnerDetalle();
    






    },[id])




    return (
        
        <RecetaPorIdContext.Provider
            value={{
                detalle,
                guardarId
                
            }}
        
        >
            {props.children}
        </RecetaPorIdContext.Provider>
    )
}

export default RecetaPorIdProvider
