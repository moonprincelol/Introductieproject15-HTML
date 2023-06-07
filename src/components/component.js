import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component-image"
      />
      <span className="component-text">{props.text}</span>
    </div>
  )
}

AppComponent.defaultProps = {
  image_src: '/google__g__logo-200w.png',
  text: 'Sign up with Google',
  image_alt: 'image',
}

AppComponent.propTypes = {
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
}

export default AppComponent
