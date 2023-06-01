import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BrandLogo from '../Assets/Images/brandLogo';
import Logo from '../Assets/Images/logo';
import { PATHS } from '../Routes/paths';

const LoginTemplates = (props: {
  hidden: boolean;
  children: JSX.Element;
  text: string;
  anotherButtonText?: string;
  url: string;
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <Row className='main-auth-container'>
        <Col className='left-container'>
          <Row>
            <div
              className='brand-logo cursor-pointer'
              onClick={() => navigate(PATHS.DEFAULT)}
            >
              <BrandLogo />
            </div>
          </Row>
          <Row>
            <div className='sub-heading auth'>
              <h5 hidden={props.hidden}>Welcome back!</h5>
              <h6>{props.text}</h6>
            </div>
          </Row>
          {props.children}
          <Row className='lower-container'>
            <Col>
              <span>
                <span className='text-color cursor-pointer' onClick={() => navigate(props.url)}>
                  {props.anotherButtonText}
                </span>{' '}
                | Or continue with: <span className='login-with'>Google</span>
              </span>
            </Col>
          </Row>
        </Col>

        {/* Right container for icon */}
        <Col
          md={6}
          className='right-container'
        >
          <Row>
            <Logo />
          </Row>
          <Row>
            <div className='sub-heading'>
              <h4>No worries, your data is safe with us!</h4>
              <span>We serve you a best platform learning with earning!</span>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default LoginTemplates;
