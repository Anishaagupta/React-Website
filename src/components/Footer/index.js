import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { Button } from '../Button';



const Footer = () => {
    return (
        <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Github</Link>
            <Link to='/'>LinkedIn</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Travel To The World
              <i className='fas fa-globe-europe'/>
            </Link>
          </div>
          <small className='website-rights'> © 2020 Created By <a href="https://anishagupta.me">Anisha Gupta</a></small>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://github.com/Anishaagupta'
              
              aria-label='Github'
            >
              <i className='fab fa-github' />
            </a>
            <a
              class='social-icon-link instagram'
              href="https://www.instagram.com/anishaaguptta/"
              
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href="https://www.facebook.com/profile.php?id=100014848606870"
              
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.linkedin.com/in/anisha-gupta-66096318b/'
              
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
            {/* <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
    )
}

export default Footer;
