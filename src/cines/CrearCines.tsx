import React from 'react'
import FormularioCines from './FormularioCines'

export default function CrearCines() {
    return (
        <div>
            Crear Cine
            <FormularioCines
                modelo={{nombre: ''}}
                onSubmit={valores => console.log(valores)}
            />
        </div>
    )
}
