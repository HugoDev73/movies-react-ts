import React from 'react'
import { Link } from 'react-router-dom'

export default function IndiceCines() {
    return (
        <div>
            Indice Cines
            <Link to="cines/crear">Crear Cines</Link>
        </div>
    )
}
