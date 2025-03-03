import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import s from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(res => {
        toast.success(`Welcome, ${res.user.email}`);
        navigate('/contacts', { replace: true });
      })
      .catch(() => toast.error('Invalid data'));
    console.log(values);
    options.resetForm();
  };

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
