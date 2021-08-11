import React from 'react';
import FormularioGeneros from './FormularioGeneros';

export default function CrearGenero() {
    //const history = useHistory();
    return (
        <div>
            <h2>Crear Genero</h2>
            <FormularioGeneros
                modelo={{ nombre: '' }}
                onSubmit={async valores => {
                    await new Promise(r => setTimeout(r, 3000))
                    console.log(valores)
                }}
            />
        </div>
    )
}