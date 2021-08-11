import React from 'react'
import { Link } from 'react-router-dom'

export default function IndiceGeneros() {
    return (
        <div>
            Indice Generos
            <Link to="generos/crear">Crear Género</Link>
        </div>
    )
}
