import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '../../../Routes/paths';
import { Row } from 'react-bootstrap';

import Avatar from '../../../Assets/icons/avatar.svg';

const AuthSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Handle active class.
  const isActive = (path: string) => {
    return `list-items ${pathname.includes(path) ? 'active' : ''}`;
  };

  return (
    <>
      <div className='sidebar '>
        <Row>
          <div className='user-header'>
            <img
              alt='user'
              src={Avatar}
            />
            <span className='full-name'>Full Name</span>
            <Link to='#'>View Profile</Link>
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
          <li className='list-items d-none'>
            <span>Courses</span>
          </li>
          <hr className='divider-line' />
          <li
            className={isActive(PATHS.BANK_DETAILS)}
            onClick={() => navigate(`${PATHS.BANK_DETAILS}/${1}`)}
          >
            <span>Bank Account</span>
          </li>
          <li className='list-items'>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AuthSidebar;
