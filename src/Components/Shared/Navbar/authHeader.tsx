import React from 'react';
import BrandLogo from '../../../Assets/Images/brandLogo';
import { Navbar } from 'react-bootstrap';

const AuthHeader = () => {
  return (
    <div className='auth-header'>
      <Navbar
        fixed='top'
        expand='lg'
        bg='#fff'
        className='topnav'
      >
        <div>
          <Navbar.Brand>
            <BrandLogo />
          </Navbar.Brand>
        </div>
      </Navbar>
    </div>
  );
};

export default AuthHeader;
