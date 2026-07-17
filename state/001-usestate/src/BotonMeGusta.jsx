import React , {useState} from 'react';

function BotonMeGusta (){
    // likes inicia en cero y solo setLikes puede modificarla
    const [likes,setLikes] = useState(0);
    //manejador del evento
    const manejarClic = () => {
        setLikes ( likes +1 );
    };

    return (
        <div style = {{ marginTop: '10px ' }}>
            {/* Se conecta con el evento onClick de HTML */}
            <button onClick={ manejarClic } style = {{ padding: '8px 16px', cursor: ' pointer ', borderRadius: '5px' }}>
                Me gusta : ( {likes} )
            </button>
        </div>
    );
}
export default BotonMeGusta;
