import React from 'react';
import BrandLogo from '../../../Assets/Images/brandLogo';
import { Navbar } from 'react-bootstrap';

const AuthHeader = (props: {
  setSidebarStatus: (val: boolean) => void;
  sidebarStatus: boolean;
}) => {
  const { setSidebarStatus, sidebarStatus } = props;
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
            {/* <span
              onClick={() => setSidebarStatus(!sidebarStatus)}
              className='navbar-toggler-icon'
            ></span> */}
            <div className='cross-icon'>X</div>
          </Navbar.Brand>
        </div>
      </Navbar>
    </div>
  );
};

export default AuthHeader;
