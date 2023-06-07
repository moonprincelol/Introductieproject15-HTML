import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './header.css'

const Header = (props) => {
  return (
    <header
      data-role="Accordion"
      className={`header-header ${props.rootClassName} `}
    >
      <div className="header-top">
        <div className="header-container"></div>
        <Link to="/" className="header-navlink">
          <div className="header-logo-with-name">
            <img
              alt={props.Image_alt}
              src={props.Image_src}
              loading="eager"
              className="header-image"
            />
            <h1 className="header-text">{props.heading}</h1>
          </div>
        </Link>
        <div className="header-login-register">
          <div className="header-container1">
            <Link to="/login" className="header-navlink1 Button button">
              {props.button1}
            </Link>
          </div>
          <div className="header-container2">
            <Link to="/register" className="header-register button Button">
              {props.button11}
            </Link>
          </div>
        </div>
      </div>
      <div className="header-container3">
        <div className="header-container4">
          <nav className="header-nav">
            <NavigationLinks
              rootClassName="rootClassName19"
              className=""
            ></NavigationLinks>
          </nav>
        </div>
      </div>
      <div data-role="AccordionHeader" className="header-accordion-header">
        <svg viewBox="0 0 1024 1024" className="header-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            className=""
          ></path>
        </svg>
      </div>
      <div data-role="AccordionContent" className="header-accordion-content">
        <div className="header-nav1">
          <NavigationLinks
            rootClassName="rootClassName20"
            className=""
          ></NavigationLinks>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  button1: 'Login',
  Image_alt: 'logo',
  Image_src: 'fb73a8c9-aaca-4d97-981b-8a6224480822',
  heading: 'StudyVault',
  button11: 'Join',
  button: 'Login',
  rootClassName: '',
  rootClassName1: '',
  rootClassName2: '',
}

Header.propTypes = {
  button1: PropTypes.string,
  Image_alt: PropTypes.string,
  Image_src: PropTypes.string,
  heading: PropTypes.string,
  button11: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  rootClassName1: PropTypes.string,
  rootClassName2: PropTypes.string,
}

export default Header
