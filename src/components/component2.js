import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className="component2-container">
      <div className="component2-container1">
        <button
          id="signUp"
          name="signup_submit"
          type="submit"
          className="component2-button Button"
        >
          {props.button}
        </button>
      </div>
      <span className="component2-text">{props.text}</span>
      <div className="signInWithGoogle">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="component2-image"
        />
        <span className="component2-text1">{props.text1}</span>
      </div>
    </div>
  )
}

Component2.defaultProps = {
  image_src: '/google__g__logo-200w.png',
  text1: 'Sign up with Google',
  image_alt: 'image',
  text: 'OR',
  button: 'Register',
}

Component2.propTypes = {
  image_src: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
}

export default Component2
