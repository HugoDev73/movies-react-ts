import React from 'react'
import FormularioCines from './FormularioCines'

export default function EditarCines() {
    return (
        <div>
            Editar Cines
            <FormularioCines
                modelo={{nombre: 'Escala Morelia'}}
                onSubmit={valores => console.log(valores)}
            />
        </div>
    )
}
