import React from 'react';
import EjemploMinimo from './EjemploMinimo';

function App (){
    return(
        <div>
            {/* Aqui se renderiza el componente con su etiqueta en mayuscula */}
            <EjemploMinimo/>
        </div>
    );
}
// exportar para que vite pueda inyectarlo en el navegador
export default App;

