import Axios from 'axios';
import React,{createContext,useState,useEffect} from 'react'

export const CategoriaContext = createContext ();


const CategoriaProvider = (props) => {


    // States 

    // State para guardar Categoria 

    const [ busquedas , guardarBusqueda] = useState([]);

    


    useEffect(()=>{


        const obtenerCategorias = async () => {


            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
            `
            const response = await Axios(url)

            guardarBusqueda(response.data.drinks)

        }
        obtenerCategorias();

    },[])


    return (

        <CategoriaContext.Provider
        value={{
            busquedas,
        }}
        >

        {props.children}

        </CategoriaContext.Provider>
    )


}


export default  CategoriaProvider
