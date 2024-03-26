import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = (props) => {
  return (
      <div className="footer">
        <div className="footer-links">
          <Link to="/about">About</Link><span className="footer-link-slash">/</span>
          <Link to="/sermons">Sermons</Link><span className="footer-link-slash">/</span>
          <Link to="/contact">Contact</Link><span className="footer-link-slash">/</span>
          <Link to="/live">Watch Live</Link>
        </div>
        <div className="row">
          <div className="col-sm">
            <p>East Side Baptist Church<br/>2409 E Park Place, Milwaukee, WI 53211<br/>2024 &copy; East Side Baptist Church</p>
          </div>
          <div className="col-sm">
            <p className="footer-social-title">STAY CONNECTED</p>
            {/* <div className="footer-social-links">
              <a href="https://www.facebook.com/eastside.baptist.7/"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.facebook.com/eastside.baptist.7/"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.youtube.com/@EASTSIDEBAPTISTCHURCHMILWAUKEE"><i className="fab fa-youtube"></i></a>
            </div> */}
            <div className="footer-social-links">
              <a href="https://www.facebook.com/eastside.baptist.7/">
                <i className="fab fa-facebook-f" style={{ fontSize: '24px' }}></i>
              </a>
              <a href="https://www.youtube.com/@EASTSIDEBAPTISTCHURCHMILWAUKEE">
                <i className="fab fa-youtube" style={{ fontSize: '24px' }}></i>
              </a>
            </div>
          </div>
          <div className="col-sm d-none d-lg-block">
            <img alt="footer-logo" src="img/ESBC-Long.png" srcSet="img/ESBC-Long.png" className="navbar-brand mx-auto" style={{ maxWidth: '100%', height: 'auto' }}/>
          </div>

        </div>
      </div>
    )
};

export default Footer;
