import React from 'react';
import './footer.css';
import { Button } from '../../button';
import { Link } from 'react-router-dom';
import { FaLinkedin} from 'react-icons/fa';


function Footer() {
  return (
    <>
    < div className='footer-container'>
        <div className='footer-subscription'> 
        <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Get in Touch
        </p>
        <p className='footer-subscription-text'>
        McKinney, TX, USA
        </p>
        <p className='footer-subscription-text'>
        contact@aarnaanalytics.com
        </p>
        <p className='footer-subscription-text'>
        (214)856-0385
        </p>
           <a
             className='social-icon-link'
             href="https://www.linkedin.com/company/aarna-analytics/"
             target='_blank'
             aria-label='LinkedIn'
           >
             <FaLinkedin />
           </a>
      </section>
      </div>
      <div className='footer-input-wrap'>
        <div className='footer-input-items'>
        <form>
            <input
              className='footer-input'
              name='name'
              type='text'
              placeholder='Name'
            />
            <input
              className='footer-input'
              name='phone'
              type='text'
              placeholder='Phone'
            />
          </form>
        </div>
        <div className='footer-input-items'>
        <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email'
            />
            <input
              className='footer-input'
              name='address'
              type='text'
              placeholder='Address'
            />
          </form>
        </div>
        <div className='footer-input-max'>
        <form>
            <input
              className='footer-input-max-content'
              name='subject'
              type='text'
              placeholder='Subject'
            />
        </form>
        <form>
            <input
              className='footer-input-max-content'
              name='message'
              type='text'
              placeholder='Type your message here'
            />
          </form>
          <Button buttonStyle='btn--outline'>Submit</Button>
          </div>
        </div>
      </ div>
       <div className='website-rights' >
          Aarna Analytics © 2020
       </div>
     </>
  );
}

export default Footer;