import React from 'react';
import './welcome.css';
import { Button } from './button';
import { Link } from 'react-router-dom';

function WelcomeSection({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  headline2,
  description,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__welcome-section' : 'home__welcome-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__welcome-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col1'>
              <div className='home__welcome-text-wrapper'>
                <h1 className={lightText ? 'heading' : 'heading-dark'}>
                  {headline}
                </h1>
                <h1 className={lightText ? 'heading' : 'heading-dark'}>
                  {headline2}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__welcome-subtitle'
                      : 'home__welcome-subtitle-dark'
                  }
                >
                  {description}
                </p>
              </div>
            </div>
            <div className='col2'>
              <div className='home__welcome-img-wrapper'>
                <img src={img} alt={alt} className='home__welcome-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeSection;