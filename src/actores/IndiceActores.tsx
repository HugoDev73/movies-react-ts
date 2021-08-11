import React from 'react'
import { Link } from 'react-router-dom'

export default function IndiceActores() {
    return (
        <div>
            Indice Actores
            <Link to="actores/crear">Crear actores</Link>
        </div>
    )
}
