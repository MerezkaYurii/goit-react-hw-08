import { ErrorMessage, Field, Form, Formik } from 'formik';

import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import LoginForm from '../../components/LoginForm/LoginForm';
const LoginPage = () => {
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
    <LoginForm initialValues={initialValues} handleSubmit={handleSubmit} />
  );
};

export default LoginPage;
