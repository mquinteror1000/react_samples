import React from 'react';

function TargetaSaludo( props ){
    return(
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px'}} >
            {/* Usamos { } para insertar un valor exacto de la prop */}
            <h2> Hola {props.nombre} </h2>
            <p> Tu especialidad es: { props.tecnologia } </p> 
        </div>
    );
}

export default TargetaSaludo;
