import React from 'react';
import { Col, Row } from 'react-bootstrap';
import WinningIcon from '../../Assets/Images/winningIcon';

const WinContainer = () => {
  return (
    <Row className='winn-container'>
      <Col
        md={6}
        className='d-flex align-items-center justify-content-center'
      >
        <div className='heading-dashboard'>
          <h1>Attend Quizes on time for</h1>
          <h1>boost your knowledge</h1>
          <div className='sub-heading right'>
            <h4>participate and rewards.</h4>
          </div>
        </div>
      </Col>
      <Col className='d-flex justify-content-center'>
        <WinningIcon />
      </Col>
    </Row>
  );
};

export default WinContainer;
