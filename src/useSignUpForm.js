import * as Yup from 'yup'
import { useFormik } from "formik";

export const useSignUpForm = ({ onSubmit }) => {

    const Schema = Yup.object({
        name: Yup.string().required('Campo obrigatório.'),
        email: Yup.string().required('Campo obrigatório.').email('Email inválido'),
        phone: Yup.string().required('Campo obrigatório.'),
        username: Yup.string()
            .matches(/^[a-z0–9_-]+$/, 'Utilize apenas letras minúsculas, números, hífens e/ou underline.')
            .required('Campo obrigatório.'),
        password: Yup.string().required('Campo obrigatório.'),
        confirmPassword: Yup.string()
            .required('Campo obrigatório.')
            .oneOf([Yup.ref('password'), null], 'As senhas não coincidem'),
    })

    return useFormik({
        initialValues: {
            name: '',
            username: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit,
        validationSchema: Schema,
        validateOnBlur: false,
        validateOnChange: false,
    })

}
