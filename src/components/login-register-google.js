import React from 'react'

import PropTypes from 'prop-types'

import './login-register-google.css'

const LoginRegisterGoogle = (props) => {
  return (
    <div className={`login-register-google-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="login-register-google-image"
      />
      <span className="login-register-google-text">{props.text3}</span>
    </div>
  )
}

LoginRegisterGoogle.defaultProps = {
  image_src: '/google__g__logo-200w.png',
  text3: 'Sign in with Google',
  image_alt: 'image',
  rootClassName: '',
}

LoginRegisterGoogle.propTypes = {
  image_src: PropTypes.string,
  text3: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default LoginRegisterGoogle
