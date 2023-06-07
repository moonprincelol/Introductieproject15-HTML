import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import LoginRegisterInput from './login-register-input'
import LoginRegisterPassword from './login-register-password'
import ButtonLightBlue from './button-light-blue'
import LoginRegisterGoogle from './login-register-google'
import './login.css'

const Login = (props) => {
  return (
    <div className={`login-container ${props.rootClassName} `}>
      <div className="login-container1">
        <h1 className="login-text">{props.heading}</h1>
        <span className="login-text1">
          <span>Welcome back!</span>
          <br></br>
        </span>
      </div>
      <form className="login-form">
        <LoginRegisterInput></LoginRegisterInput>
        <LoginRegisterPassword></LoginRegisterPassword>
      </form>
      <div className="login-container2">
        <div className="login-container3">
          <input type="checkbox" checked className="login-checkbox" />
          <span className="login-stay-signed-in">{props.text1}</span>
        </div>
        <span className="login-text4">{props.text}</span>
      </div>
      <div className="login-container4">
        <Link to="/" className="login-navlink">
          <ButtonLightBlue
            button="LOGIN"
            rootClassName="button-light-blue-root-class-name3"
            className="login-component2"
          ></ButtonLightBlue>
        </Link>
        <span className="login-text5">{props.text2}</span>
        <LoginRegisterGoogle></LoginRegisterGoogle>
      </div>
    </div>
  )
}

Login.defaultProps = {
  text: 'Reset password',
  heading: 'LOGIN',
  text2: 'OR',
  rootClassName: '',
  text1: 'Remember me',
  rootClassName1: '',
}

Login.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  rootClassName1: PropTypes.string,
}

export default Login
