import React from "react"
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import { FieldValidatorType } from "utils/validators/validators";
import "./styles.scss";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
    children: React.ReactNode
}

const FormControl: React.FC<FormControlPropsType> = ({meta: { touched, error }, children }) => {
    const hasError = touched && error
    return (
        <>
            <div className={hasError ? "errorTextarea" : " "}>{children}</div>
            { hasError && <span className={hasError ? "errorSpan" : " "}>{error}</span> }
        </>
    )
}
export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restprops} = props;
    const {input, meta, ...restprops} = props;
    return  <FormControl {...props}><textarea {...input} {...restprops} /></FormControl>
}
export const Input: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restprops} = props;
    const {input, meta, ...restprops} = props;
    return <FormControl {...props}><input {...input} {...restprops} /></FormControl>        
}

export function createFild<FormKeysType extends string>(placeholder: string | undefined, 
                           name: FormKeysType, 
                           validators: Array<FieldValidatorType>, 
                           component: React.FC<WrappedFieldProps>, 
                           props = {}, text = ""){
    return  <>
                <Field  
                    placeholder={ placeholder }
                    name={ name } 
                    validate={ validators } 
                    component={ component }
                    { ...props }
                />{ text }
            </>
}
export type GetStringKeys<T> = Extract<keyof T, string>