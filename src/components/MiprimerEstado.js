import React, { useState } from 'react';

export const MiprimerEstado = () => {

    const [nombre, setNombre] = useState("Dennis Landaverde");

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    }

    return (
    <div>
        <h3>Mi primer estado</h3>

        <strong> 
            {nombre}
        </strong>

        &nbsp;
        <button onClick={e => cambiarNombre(e, "Landaverde")}>Cambiar Nombre</button>

        &nbsp;
    <input type="text"  onKeyUp={e => cambiarNombre(e, e.target.value)} />
    </div>
  )
}
