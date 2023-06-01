import React, { useState } from 'react';
import Header from '../Shared/Navbar/header';
import { useLocation } from 'react-router-dom';
import { PATHS } from '../../Routes/paths';
import AuthHeader from '../Shared/Navbar/authHeader';
import AuthSidebar from '../Shared/Navbar/authSidebar';

const CommonLayout = (props: { children: JSX.Element }) => {
  const { pathname } = useLocation();
  const [show, setShow] = useState<boolean>(true);

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
              <AuthHeader
                setShow={setShow}
                show={show}
              />
              <div className='main-body-container'>
                <div className='sidebar-container'>
                  <div className='hidden-mobile'>
                    <AuthSidebar />
                  </div>
                  <div className='hidden-desktop'>
                    {!show && <AuthSidebar />}
                  </div>
                </div>
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
