import React from 'react';
import FichaCliente from './Ficha';

function ListaClientes(props) {
    
    
    return (
    <>
    {props.ListaClientes.map((client) => {
        return (
            <>
            <div>  
               <FichaCliente client={client}/>        
            </div>
            
            </>

        )
    })}    
    </>
    );
}

export default ListaClientes;