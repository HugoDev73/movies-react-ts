import React from 'react'
import FormularioActores from './FormularioActores'

export default function CrearActores() {
    return (
        <div>
            <h2>Crear Actores</h2>
            <FormularioActores
                modelo={{ nombre: '', fechaNacimiento: undefined }}
                onSubmit={valores => console.log(valores)}
            />
        </div>
    )
}
