import { Formik, Form, Field } from "formik";
import { useSignUpForm } from "./useSignUpForm";
import { FieldError } from "./FieldError";


export const SignUpForm = () => {
    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        handleBlur
    } = useSignUpForm({
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <div className="form-container">
            <Formik
                initialValues={values}
                onSubmit={handleSubmit}
                validateOnBlur={false}
                validateOnChange={false}
            >
                {() => (
                    <Form className='form'>
                        <div>
                            <label htmlFor="name">Nome</label>
                            <Field
                                name="name"
                                type="text"
                                placeholder='Ex:. Lucas Silva'
                                value={values.name}
                                onChange={handleChange}
                            />
                            {errors.name && <FieldError message={errors.name} />}
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field
                                name="email"
                                type="email"
                                placeholder='Ex:. lucas@email.com'
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <FieldError message={errors.email} />}
                        </div>
                        <div>
                            <label htmlFor="username">Usuário</label>
                            <Field
                                name="username"
                                type="text"
                                placeholder='Ex:. lucas123'
                                value={values.username}
                                onChange={handleChange}
                            />
                            {errors.username && <FieldError message={errors.username} />}
                        </div>
                        <div>
                            <label htmlFor="password">Senha</label>
                            <Field
                                type="password"
                                name="password"
                                placeholder='Ex:. ***********'
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && <FieldError message={errors.password} />}
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirmar Senha</label>
                            <Field
                                type="password"
                                name="confirmPassword"
                                placeholder='Ex:. ***********'
                                value={values.confirmPassword}
                                onChange={handleChange}
                            />
                            {errors.confirmPassword && <FieldError message={errors.confirmPassword} />}
                        </div>
                        <button className='submit-button' type="submit">Cadastrar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )

}
