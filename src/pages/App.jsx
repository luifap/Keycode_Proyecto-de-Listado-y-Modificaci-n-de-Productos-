import React from 'react';
import PaginaInicio from '../components/Páginas/PaginaInicio'; // Ajusta la ruta según la estructura de tu proyecto
import CardList  from '../components/CardList';
import '../styles/estilos.css'; // Asegúrate de que los estilos se importen correctamente

function App() {
    return (
        <div className="App">
            <h1 className='text-center display-1 py-4'>Proyecto de Listado y Modificación de Productos</h1>
            <PaginaInicio />
            <CardList />
          
        </div>
    );
}

export default App;