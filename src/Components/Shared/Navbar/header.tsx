import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import BrandLogo from '../../../Assets/Images/brandLogo';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '../../../Routes/paths';
import CustomButton from '../Buttons/customButton';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Common navigate functin for handling the navigation.
  const onNavigateClick = (path: string) => navigate(path);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand='sm'
        className='navbar-custom'
      >
        <Container fluid>
          <Navbar.Brand
            className='cursor-pointer'
            onClick={() => navigate(PATHS.DEFAULT)}
          >
            <BrandLogo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse
            id='responsive-navbar-nav'
            className='justify-content-end'
          >
            <Nav className='nav-container'>
              <Nav.Item>
                <Nav.Link
                  className={pathname.includes(PATHS.HOW) ? 'link-active' : ''}
                  onClick={() => onNavigateClick(PATHS.HOW)}
                >
                  How it works?
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className={
                    pathname.includes(PATHS.FEATURES) ? 'link-active' : ''
                  }
                  onClick={() => onNavigateClick(PATHS.FEATURES)}
                >
                  Features
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className={
                    pathname.includes(PATHS.ABOUT) ? 'link-active' : ''
                  }
                  onClick={() => onNavigateClick(PATHS.ABOUT)}
                >
                  About us
                </Nav.Link>
              </Nav.Item>
              <CustomButton
                buttonText='Login'
                className='outline-button radius'
                onclick={() => navigate(PATHS.LOGIN)}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className='line-header' />
    </>
  );
};

export default Header;
