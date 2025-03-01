import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './RegistrationPage.module.css';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.resetForm();
  };

  return (
    <div className={s.contaiher}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label>
            Name:
            <Field className={s.field} name="name" placeholder="name" />
            <ErrorMessage className={s.error} name="name" component="p" />
          </label>
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
            Register
          </button>
          <p>
            You have account already. <Link to="/login">Get it.</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
