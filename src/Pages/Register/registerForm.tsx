import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../Components/Shared/Inputs/customInput';
import { PATHS } from '../../Routes/paths';

const RegisterForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <Row className='login-container'>
        <Row>
          <Col className='input-box'>
            <CustomInput
              type='text'
              placeholder='Full Name'
            />
          </Col>
        </Row>
        <Row>
          <Col className='input-box'>
            <CustomInput
              type='text'
              placeholder='Email Address'
            />
          </Col>
        </Row>
        <Row>
          <Col className='input-box'>
            <CustomInput
              type='text'
              placeholder='Password'
            />
          </Col>
        </Row>
        <Row>
          <Col className='input-box'>
            <CustomInput
              type='text'
              placeholder='Confirm Password'
            />
          </Col>
        </Row>
        <div className='submit-button mt-2'>
          <button
            className='filled-button'
            type='submit'
          >
            Register
          </button>
        </div>
      </Row>
      <Row className='additional-login'>
        <div className='regs-link regs'>
          <button
            className='regs-button'
            onClick={() => navigate(PATHS.LOGIN)}
          >
            Login
          </button>
        </div>
      </Row>
    </>
  );
};

export default RegisterForm;
