import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import s from './LoginForm.module.css';
const LoginForm = ({ handleSubmit, initialValues }) => {
  return (
    <div className={s.contaiher}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label>
            Email:
            <Field
              className={s.field}
              name="email"
              type="email"
              placeholder="email"
            />
            <ErrorMessage className={s.error} name="email" component="p" />
          </label>
          <label>
            Password:
            <Field
              className={s.field}
              name="password"
              type="password"
              placeholder="password"
            />
            <ErrorMessage className={s.error} name="password" component="p" />
          </label>

          <button className={s.button} type="submit">
            Log In
          </button>
          <p>
            You don`t have account yet. <Link to="/register">Get it.</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
