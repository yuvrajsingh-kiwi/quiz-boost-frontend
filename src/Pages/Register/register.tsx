import React from 'react';
import LoginTemplates from '../../Templates/loginTemplates';
import RegisterForm from './registerForm';
import { RegisterValues } from '../../Interface/forms';

const Register = () => {

  // Registration function.
  const onRegister = (values: RegisterValues) => {
    console.log(values);
  };

  return (
    <LoginTemplates
      hidden
      text='Please register and continue if do not have an account!'
    >
      <RegisterForm onSubmit={(val: RegisterValues) => onRegister(val)} />
    </LoginTemplates>
  );
};

export default Register;
