import React from 'react';
import Header from '../Shared/Navbar/header';
import { useLocation } from 'react-router-dom';
import { PATHS } from '../../Routes/paths';
import AuthHeader from '../Shared/Navbar/authHeader';

const CommonLayout = (props: { children: JSX.Element }) => {
  const { pathname } = useLocation();

  return (
    <>
      {[PATHS.ABOUT, PATHS.DEFAULT, PATHS.FEATURES, PATHS.HOW].includes(
        pathname
      ) ? (
        <>
          <Header /> {props.children}
        </>
      ) : (
        <>
          {![
            PATHS.LOGIN,
            PATHS.REGISTER,
            PATHS.RESET_PASSWORD,
            PATHS.FORGOT_PASSWORD,
          ].includes(pathname) ? (
            <div className='main-auth-container auth'>
              <AuthHeader/>
              <div className='auth-body-container'>
                <div className='side-bar'></div>
                <div className='body-container'>{props.children}</div>
              </div>
            </div>
          ) : (
            <>{props.children} </>
          )}
        </>
      )}
    </>
  );
};

export default CommonLayout;
