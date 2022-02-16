import { Formik, Form, FormikHelpers } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../utils/Button';
import FormGroupText from '../utils/FormGroupText';
import * as Yup from 'yup'
import { cinesCreacionDTO } from './cines.model';
import Mapa from '../utils/Mapa';

export default function FormularioCines(props: FormularioCinesPropos) {
    return (
        <>
            <Formik initialValues={props.modelo}
                onSubmit={props.onSubmit}

                validationSchema={Yup.object({
                    nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
                })}
            >
                {(formikProps) => (
                    <Form>
                        <FormGroupText campo="nombre" label="Nombre" placeholder="Ingresa nombre del cine" />
                        <div style={{marginBottom: '1rem'}}>
                            <Mapa/>
                        </div>
                        <Button disabled={formikProps.isSubmitting} type="submit">Guardar</Button>
                        <Link to="/cines" className="btn btn-secondary">Cancelar</Link>
                    </Form>
                )}


            </Formik>
        </>
    )
}


interface FormularioCinesPropos {
    modelo: cinesCreacionDTO;
    onSubmit(valores: cinesCreacionDTO, accion: FormikHelpers<cinesCreacionDTO>): void;
}