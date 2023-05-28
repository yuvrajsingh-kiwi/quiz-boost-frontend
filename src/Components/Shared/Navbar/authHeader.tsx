import React, { useState } from 'react';
import BrandLogo from '../../../Assets/Images/brandLogo';
import { Navbar, Row } from 'react-bootstrap';

// Icons imports.
import Avatar from '../../../Assets/icons/avatar.svg';
import walletIcon from '../../../Assets/icons/wallet-icon.svg';
import dropdownIcon from '../../../Assets/icons/dropdown-icon.svg';
import cross from '../../../Assets/icons/cross-icon.svg';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '../../../Routes/paths';

const AuthHeader = () => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Handle active class.
  const isActive = (path: string) => {
    return `list-items ${pathname.includes(path) ? 'active' : ''}`;
  };
  return (
    <div className='auth-header'>
      <Navbar fixed='top' expand='lg' bg='#fff' className='topnav'>
        <Navbar.Brand>
          <BrandLogo />
        </Navbar.Brand>
        <div className='avatar' onClick={() => setShow(true)}>
          <img src={Avatar} className='avatar-img' alt='avatar' />
          <img
            className={`dropdown-icon ${show ? 'active' : ''}`}
            alt='icon'
            src={dropdownIcon}
          />
        </div>
      </Navbar>
      {show && (
        <div className='sidebar'>
          <div className='close-icon'>
            <span>
              <img src={cross} alt='cross' onClick={() => setShow(false)} />
            </span>
          </div>
          <Row>
            <div className='user-header'>
              <img alt='user' src={Avatar} />
              <span className='full-name'>Full Name</span>
              <Link to='#'>View Profile</Link>
            </div>
          </Row>
          <hr className='divider-line' />
          <Row>
            <div className='wallet-header'>
              <img alt='user' src={walletIcon} />
              <span className='amount primary-text'>
                Amount: <span className='primary-text'>200</span>
              </span>
              <Link to='#'>View Bank Details</Link>
            </div>
          </Row>
          <hr className='divider-line' />

          {/* Links of sidebar */}
          <ul className='list-container'>
            <li
              className={isActive(PATHS.DASHBOARD)}
              onClick={() => navigate(PATHS.DASHBOARD)}
            >
              <span>Dashboard</span>
            </li>
            <li
              className={isActive(PATHS.WINNINGS)}
              onClick={() => navigate(`${PATHS.WINNINGS}/${1}`)}
            >
              <span>Your Winnings</span>
            </li>
            <li
              className={isActive(PATHS.SCHEDULED_QUIZES)}
              onClick={() => navigate(`${PATHS.SCHEDULED_QUIZES}/${1}`)}
            >
              <span>Scheduled Quizes</span>
            </li>
            <li className='list-items'>
              <span>Courses</span>
            </li>
            <li className='list-items'>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AuthHeader;
