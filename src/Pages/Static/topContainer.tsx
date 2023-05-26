import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import DashboardImage from '../../Assets/Images/dashboardImage';

const TopContainer = () => {
  return (
    <Row className='top-welcome'>
      <Col className='right-dashboard'>
        <div className='dashboard-img'>
          <DashboardImage />
        </div>
      </Col>
      <Col
        md={6}
        className='left-dashboard'
      >
        <div className='heading-dashboard'>
          <h1>Learn</h1>
          <h1>new, Give Quiz</h1>
          <h1>and Earn Rewards</h1>
          <div className='sub-heading left'>
            <h4>We help you prepare and crack exams.</h4>
          </div>
          <div className='marg'>
            <Button className='filled-button'>Start with us</Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TopContainer;
