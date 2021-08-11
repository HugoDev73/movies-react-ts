import React from 'react'
import FormularioActores from './FormularioActores'


export default function EditarActores() {
    return (
        <div>
            <h2>Editar Actor</h2>
            <FormularioActores
                modelo={{ nombre: 'Mario Almada', 
                biografia: `# Mario Almada
nacio **Mario**`,
                fechaNacimiento: new Date('1992-06-01T0:00:00'), 
                fotoURL: 'https://www.eluniversal.com.mx/sites/default/files/2016/10/04/almada_muere_6.jpg'}}
                onSubmit={valores => console.log(valores)}
               
            />
        </div>
    )
}
