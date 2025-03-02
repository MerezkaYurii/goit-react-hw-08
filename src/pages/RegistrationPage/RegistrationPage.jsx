import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

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
    <>
      <RegistrationForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default RegistrationPage;
