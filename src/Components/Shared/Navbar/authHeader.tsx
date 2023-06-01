import React from 'react';
import BrandLogo from '../../../Assets/Images/brandLogo';
import { Navbar } from 'react-bootstrap';

// Icons imports.
import herber from '../../../Assets/icons/hemberger.svg';
import cross from '../../../Assets/icons/cross-icon.svg';

const AuthHeader = (props: {
  setShow: (val: boolean) => void;
  show: boolean;
}) => {
  const { setShow, show } = props;
  return (
    <div className='auth-header'>
      <Navbar
        fixed='top'
        expand='lg'
        bg='#fff'
        className='topnav'
      >
        <Navbar.Brand className='ps-3'>
          <BrandLogo />
        </Navbar.Brand>
        <div
          className='avatar hidden-desktop'
          onClick={() => setShow(!show)}
        >
          <img
            src={show ? herber : cross}
            className={`avatar-img ${!show && 'cross'}`}
            alt='avatar'
          />
        </div>
      </Navbar>
    </div>
  );
};

export default AuthHeader;
