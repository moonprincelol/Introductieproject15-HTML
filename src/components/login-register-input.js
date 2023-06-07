import React from 'react'

import PropTypes from 'prop-types'

import './login-register-input.css'

const LoginRegisterInput = (props) => {
  return (
    <div className="login-register-input-container">
      <div className="login-register-input-container1">
        <svg viewBox="0 0 1024 1024" className="login-register-input-icon">
          <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
        </svg>
      </div>
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        className="login-register-input-textinput input-inverted"
      />
    </div>
  )
}

LoginRegisterInput.defaultProps = {
  textinput_placeholder: 'username or email',
}

LoginRegisterInput.propTypes = {
  textinput_placeholder: PropTypes.string,
}

export default LoginRegisterInput
