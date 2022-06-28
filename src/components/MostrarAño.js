import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const MostrarAño = ({year}) => {

    const [año, setAño] = useState(year);

    const siguiente = e => {
        setAño(año + 1);
    }
    const anterior = e => {
        let ant = año - 1;
        setAño(ant);
    }

    const cambiarAño = e => {
        let dato = e.target.value;

        if(Number.isInteger(parseInt(dato))) {
        setAño(dato);
        }else{
            setAño(year);
        }
    }

  return (
    <div>

        <h2>Ejercicio con Eventos y useState</h2>
        <strong className='label label-green'>
            {año}
        </strong>

        <p>   
            <button onClick={anterior}>ANTERIOR</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={siguiente}>SIGUIENTE</button>
        </p>

        <p>Cambiar Año
            <input 
            type="number"
            onChange={cambiarAño} />
        </p>

    </div>
  )
}

MostrarAño.propTypes = {
    year: PropTypes.number.isRequired
}