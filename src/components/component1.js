import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component1-image"
      />
      <span className="component1-text">{props.text}</span>
    </div>
  )
}

Component1.defaultProps = {
  image_alt: 'image',
  text: 'Sign up with Google',
  image_src: '/google__g__logo-200w.png',
}

Component1.propTypes = {
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component1
