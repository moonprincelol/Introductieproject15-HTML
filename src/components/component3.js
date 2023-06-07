import React from 'react'

import PropTypes from 'prop-types'

import './component3.css'

const Component3 = (props) => {
  return (
    <div className="component3-container">
      <div className="component3-container1">
        <button
          id="signUp"
          name="signup_submit"
          type="submit"
          className="component3-button Button"
        >
          {props.button}
        </button>
      </div>
      <span className="component3-text">{props.text}</span>
      <div className="signInWithGoogle">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="component3-image"
        />
        <span className="component3-text1">{props.text1}</span>
      </div>
    </div>
  )
}

Component3.defaultProps = {
  text1: 'Sign up with Google',
  text: 'OR',
  button: 'Register',
  image_alt: 'image',
  image_src: '/google__g__logo-200w.png',
}

Component3.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component3
