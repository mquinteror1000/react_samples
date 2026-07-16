import React from 'react';
import TargetaSaludo from './TargetaSaludo';

function App (){
    return(
        <div>
            <h1> Mi equipo de desarrollo </h1>
            {/* Reutilizamos los componentes pasandoles diferetes atrubudos */}
            <TargetaSaludo nombre='Martin' tecnologia='React y Material UI' />
            <TargetaSaludo nombre='Ana' tecnologia='Diseño UX' />
            <TargetaSaludo nombre='José' tecnologia='Backedn con quarkus' />
        </div>
    );
}

export default App;
