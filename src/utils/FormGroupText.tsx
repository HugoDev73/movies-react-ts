import { Field, ErrorMessage } from 'formik'
import React from 'react'
import MostrarErrorCampo from './MostrarErrorCampo'

export default function FormGroupText(props: formGroupTextProps) {
    return (
        <div className="mb-3">
            {props.label ? <label htmlFor={props.campo} className="form-label">{props.label}</label> : null}
            <Field name={props.campo} className="form-control" placeholder={props.placeholder}></Field>
            <ErrorMessage name={props.campo}>{mensaje =>
                <MostrarErrorCampo mensaje={mensaje}/>
            }</ErrorMessage>
        </div>
    )
}


interface formGroupTextProps {
    campo: string;
    label?: string;
    placeholder?: string;
}