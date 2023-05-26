import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { howContent } from './Data/content';
import StaticTemplate from '../../Templates/staticTemplate';
import HowWorksIcon from '../../Assets/Images/howWorksIcon';

const How = () => {
  return (
    <>
      <div className='main-container'>
        <Row className='features-cont pt-4'>
          <Col className='left-fet'>
            <div className='work-heading'>
              <h3>How it works?</h3>
              <div className='sub-heading features'>
                <h4>
                  Learn, Quiz, and Earn Rewards! Explore our extensive
                  collection of learning resources, test your knowledge with
                  interactive quizzes, and unlock exciting rewards along your
                  educational journey.
                </h4>
              </div>
            </div>
          </Col>
          <Col className='right-fet'>
            <HowWorksIcon />
          </Col>
        </Row>
        <Row className='details-container'>
          {howContent.map((val, id) => {
            return (
              <StaticTemplate
                id={id}
                list={val.list}
                paragraph={val.paragraph}
              />
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default How;
