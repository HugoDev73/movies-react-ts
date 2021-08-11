import { Field, Form, Formik } from 'formik'
import React from 'react'
import { NumberLiteralType } from 'typescript'
import { generoDTO } from '../generos/generos.model'
import Button from '../utils/Button'

export default function FiltroPeliculas() {

    const valorInicial: filtroPeliculasForm = {
        titulo: '',
        generoId: 0,
        proximosEstrenos: false,
        enCines: false
    }

    const generos: generoDTO[] = [
        { id: 1, nombre: 'Acción' },
        { id: 2, nombre: 'Comedia' }
    ]

    return (
        <>
            <h2>Filtro de peliculas</h2>

            <Formik initialValues={valorInicial} onSubmit={valores => console.log(valores)}>
                {(formikProps) => (
                    <Form>
                        <div className="d-flex">

                            <div className="mb-2 mx-sm-3">
                                <label htmlFor="titulo" className=""></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="titulo"
                                    placeholder="Titulo de la pelicula"
                                    {...formikProps.getFieldProps('titulo')}
                                />
                            </div>

                            <div className="mb-2 mx-sm-3">
                                <select
                                    className="form-control form-select"
                                    {...formikProps.getFieldProps('generoId')}
                                >
                                    <option value="0">Seleccione un Genero</option>
                                    {generos.map(genero =>
                                        <option key={genero.id} value={genero.id}>
                                            {genero.nombre}
                                        </option>
                                    )}
                                </select>
                            </div>

                            <div className="mb-2 mx-sm-3">
                                <Field
                                    className="form-check-input"
                                    id="proximosEstrenos"
                                    name="proximosEstrenos"
                                    type="checkbox" />
                                <label className="form-check-label" htmlFor="proximosEstrenos">
                                    Proximos Estrenos
                                </label>
                            </div>

                            <div className="mb-2 mx-sm-3">
                                <Field
                                    className="form-check-input"
                                    id="enCines"
                                    name="enCines"
                                    type="checkbox" />
                                <label className="form-check-label" htmlFor="enCines">
                                    En Cines
                                </label>
                            </div>
                            <Button
                                className="btn btn-primary mb-2 mx-sm-3"
                                onClick={() => formikProps.submitForm()} >
                                Filtrar
                            </Button>
                            <Button
                                className="btn btn-danger mb-2 mx-sm-3"
                                onClick={() => formikProps.setValues(valorInicial)} >
                                Limpiar
                            </Button>

                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}


interface filtroPeliculasForm {
    titulo: string;
    generoId: number;
    proximosEstrenos: boolean;
    enCines: boolean;
}