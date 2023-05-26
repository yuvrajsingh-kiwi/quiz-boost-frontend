import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { featuresContent } from './Data/content';
import StaticTemplate from '../../Templates/staticTemplate';
import FeaturesIcon from '../../Assets/Images/featuresIcon';

const Features = () => {
  return (
    <>
      <div className='main-container'>
        <Row className='features-cont pt-4'>
          <Col className='left-fet'>
            <div className='work-heading'>
              <h3>Features</h3>
              <div className='sub-heading features'>
                <h4>
                  We are excited to showcase the various features and
                  functionalities that make our platform stand out. Here are
                  some key features that set us apart.
                </h4>
              </div>
            </div>
          </Col>
          <Col className='right-fet'>
            <FeaturesIcon />
          </Col>
        </Row>
        <Row className='details-container'>
          {featuresContent.map((val, id) => {
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

export default Features;
