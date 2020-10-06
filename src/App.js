import React from 'react';

import Header from './components/Header'
import Recetas from './components/Recetas';
import CategoriaProvider from './context/CategoriasContext';
import RecetasProvder from './context/RecetasContext'
import RecetaPorIdProvider from './context/RecetaPorIdContext'


function App() {
  return (

    <CategoriaProvider>
      <RecetasProvder>
        <RecetaPorIdProvider>
        <Header/>
        <Recetas/>
        </RecetaPorIdProvider>
      </RecetasProvder>
    </CategoriaProvider>






        
            


   
  );
}

export default App;
