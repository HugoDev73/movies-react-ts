import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../utils/Button'
import FormGroupText from '../utils/FormGroupText'
import { actorCreacionDTO } from './actores.model'
import * as Yup from 'yup'
import FormGroupFecha from '../utils/FormGroupFecha'
import FormGroupImagen from '../utils/FormGroupImagen'
import FormGroupMarkdown from '../utils/FormGroupMarkdown'

export default function FormularioActores(props: FormularioActoresProps) {
    return (
        <>
            <Formik 
            initialValues={props.modelo} 
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula(),
                fechaNacimiento: Yup.date().nullable().required('Este campo es requerido')
            })}
            >
                {(formikProps) => (
                    <Form>
                       <FormGroupText campo="nombre" label="Nombre" /> 
                       <FormGroupFecha label="Fecha de Nacimiento" campo="fechaNacimiento"/>
                       <FormGroupImagen campo="foto" label="foto" imagenURL={props.modelo.fotoURL}/>
                       <FormGroupMarkdown campo="biografia" label="biografia" />
                       <Button disabled={formikProps.isSubmitting} type="submit">
                           Guardar
                       </Button>
                       <Link className="btn btn-secondary" to="/actores"> Cancelar </Link>
                    </Form>
                )}
            </Formik>
        </>
    )
}

interface FormularioActoresProps {
    modelo: actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>): void;
}