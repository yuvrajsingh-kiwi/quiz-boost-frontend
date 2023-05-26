import React from 'react';
import LoginTemplates from '../../Templates/loginTemplates';
import RegisterForm from './registerForm';

const Register = () => {
  return (
    <LoginTemplates hidden text='Please register and continue if do not have an account!'>
      <RegisterForm />
    </LoginTemplates>
  );
};

export default Register;
