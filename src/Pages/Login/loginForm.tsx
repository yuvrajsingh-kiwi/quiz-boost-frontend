import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CustomInput from '../../Components/Shared/Inputs/customInput';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../Routes/paths';
import { Form, Formik } from 'formik';
import { LOGIN_VALUES } from '../../Constants/initialValues';
import { LoginPageProps, LoginValues } from '../../Interface/forms';

const LoginForm = (props: LoginPageProps) => {
  const { onSubmit } = props;
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={LOGIN_VALUES}
        onSubmit={(val: LoginValues) => onSubmit(val)}
      >
        {() => (
          <Form>
            <Row className='login-container'>
              <Row>
                <Col className='input-box'>
                  <CustomInput type='text' placeholder='Email Address' />
                </Col>
              </Row>
              <Row>
                <Col className='input-box'>
                  <CustomInput type='text' placeholder='Password' />
                </Col>
              </Row>
              <div className='submit-button mt-2'>
                <button className='filled-button' type='submit'>
                  Login
                </button>
              </div>
            </Row>
          </Form>
        )}
      </Formik>
      <Row className='additional-login d-none'>
        <div className='regs-link login'>
          <button
            className='regs-button'
            onClick={() => navigate(PATHS.REGISTER)}
          >
            Register
          </button>
        </div>
      </Row>
    </>
  );
};

export default LoginForm;
