import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Auth from '../auth/Auth.js'
import './Header.css';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }
    this.auth = new Auth();
  }

  navBarToggleClick = (event) => {
    this.setState({
      collapsed: this.state.collapsed ? false : true
    });
  }

  navLinkClick = (event) => {
    this.setState({
      collapsed: true
    });
  }

  login = (event) => {
    this.auth.login();
  }

  render() {
    let collapsedClass = "collapse";

    if (!this.state.collapsed) {
      collapsedClass = "";
    }

    return (
      <nav className="sbc-navbar navbar fixed-top navbar-expand-xl navbar-light">
        <Link to="/" className="navbar-brand ml-auto" onClick={this.navLinkClick}>
          <img className="sbc-navbar-logo" src="img/ESBC-Long.png" alt="Logo" />
        </Link>
        
        <button className="navbar-toggler" type="button" onClick={this.navBarToggleClick}>
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`${collapsedClass} navbar-collapse sbc-navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto sbc-navbar-content" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/word-for-the-way" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Messages</NavLink>
              {/* <NavLink to="/sermons" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Messages</NavLink> */}
            </li>
            <li className="nav-item">
              <NavLink to="/sermons" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Resources</NavLink>
              {/* <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Resources</NavLink> */}

            </li>
            {/* <li className="nav-item"> */}
              {/* <NavLink to="/word-for-the-way" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Word for the way</NavLink> */}
              {/* <NavLink to="/live" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Watch Live</NavLink> */}
            {/* </li> */}
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Contacts</NavLink>
              {/* <NavLink to="/giving" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Contacts</NavLink> */}
            </li>
            <li className="nav-item">
              <NavLink to="/giving" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Donate</NavLink>
              {/* <NavLink to="/live" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Donate</NavLink> */}

            </li>
          </ul>
        </div>
      </nav>
    )
  }
};

export default Header;

