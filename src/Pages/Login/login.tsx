import React from 'react';
import LoginForm from './loginForm';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../Routes/paths';
import LoginTemplates from '../../Templates/loginTemplates';
import { LoginValues } from '../../Interface/forms';

const Login = () => {
  const navigate = useNavigate();

  const onLogin = (values: LoginValues) => {
    localStorage.setItem('quaz_access_token', 'anshukumar'); // Need to remove in future.
    navigate(PATHS.DASHBOARD);
  };

  return (
    <LoginTemplates
      text='Please continue with your account.'
      hidden={false}
      anotherButtonText='REGISTER'
      url={PATHS.REGISTER}
    >
      <LoginForm onSubmit={(values: LoginValues) => onLogin(values)} />
    </LoginTemplates>
  );
};

export default Login;
