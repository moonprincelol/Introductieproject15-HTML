import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import LoginRegisterPassword from './login-register-password'
import ButtonLightBlue from './button-light-blue'
import LoginRegisterGoogle from './login-register-google'
import './register.css'

const Register = (props) => {
  return (
    <div className={`register-container ${props.rootClassName} `}>
      <div className="register-container01">
        <h1 className="register-text">{props.heading}</h1>
        <span className="register-text01">
          <span>
            Welcome to our platform! We just need a few details before you can
            continue
          </span>
          <br></br>
        </span>
      </div>
      <form className="register-form">
        <div className="register-container02">
          <div className="register-container03">
            <svg viewBox="0 0 1024 1024" className="register-icon">
              <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder={props.textinput_placeholder2}
            className="register-textinput input-inverted"
          />
        </div>
        <div className="register-container04">
          <div className="register-container05">
            <svg viewBox="0 0 1024 1024" className="register-icon02">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder={props.textinput_placeholder}
            autoComplete="email"
            className="register-textinput1 input-inverted"
          />
        </div>
        <div className="register-container06">
          <div className="register-container07">
            <div className="register-container08">
              <svg viewBox="0 0 1024 1024" className="register-icon04">
                <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder={props.textinput_placeholder3}
              autoComplete="given-name"
              className="register-textinput2 input-inverted"
            />
          </div>
          <div className="register-container09">
            <div className="register-container10">
              <svg viewBox="0 0 1024 1024" className="register-icon06">
                <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder={props.textinput_placeholder4}
              autoComplete="family-name"
              className="register-textinput3 input-inverted"
            />
          </div>
        </div>
        <LoginRegisterPassword
          rootClassName="login-register-password-root-class-name"
          textinput_placeholder1="Password"
        ></LoginRegisterPassword>
        <LoginRegisterPassword
          rootClassName="login-register-password-root-class-name1"
          textinput_placeholder1="Repeat Password"
        ></LoginRegisterPassword>
        <div className="register-container11">
          <div
            data-thq="thq-dropdown"
            className="register-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="register-dropdown-toggle"
            >
              <div className="register-container12">
                <svg viewBox="0 0 1024 1024" className="register-icon08">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
              </div>
              <span className="register-text04">Gender</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="register-dropdown-arrow"
              >
                <svg viewBox="0 0 1024 1024" className="register-icon10">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="register-dropdown-list">
              <li
                data-thq="thq-dropdown"
                className="register-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="register-dropdown-toggle01"
                >
                  <span className="register-text05">Sub-menu Item</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="register-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="register-dropdown-toggle02"
                >
                  <span className="register-text06">Sub-menu Item</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="register-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="register-dropdown-toggle03"
                >
                  <span className="register-text07">Sub-menu Item</span>
                </div>
              </li>
            </ul>
          </div>
          <div
            data-thq="thq-dropdown"
            className="register-thq-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="register-dropdown-toggle04"
            >
              <div className="register-container13">
                <svg viewBox="0 0 1024 1024" className="register-icon12">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
              </div>
              <span className="register-text08">Country</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="register-dropdown-arrow1"
              >
                <svg viewBox="0 0 1024 1024" className="register-icon14">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="register-dropdown-list1"
            >
              <li
                data-thq="thq-dropdown"
                className="register-dropdown3 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="register-dropdown-toggle05"
                >
                  <span className="register-text09">Sub-menu Item</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="register-dropdown4 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="register-dropdown-toggle06"
                >
                  <span className="register-text10">Sub-menu Item</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="register-dropdown5 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="register-dropdown-toggle07"
                >
                  <span className="register-text11">Sub-menu Item</span>
                </div>
              </li>
            </ul>
          </div>
          <div
            data-thq="thq-dropdown"
            className="register-thq-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="register-dropdown-toggle08"
            >
              <div className="register-container14">
                <svg viewBox="0 0 1024 1024" className="register-icon16">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
              </div>
              <span className="register-text12">University</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="register-dropdown-arrow2"
              >
                <svg viewBox="0 0 1024 1024" className="register-icon18">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="register-dropdown-list2"
            >
              <li
                data-thq="thq-dropdown"
                className="register-dropdown6 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="register-dropdown-toggle09"
                >
                  <span className="register-text13">Sub-menu Item</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="register-dropdown7 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="register-dropdown-toggle10"
                >
                  <span className="register-text14">Sub-menu Item</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="register-dropdown8 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="register-dropdown-toggle11"
                >
                  <span className="register-text15">Sub-menu Item</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </form>
      <div className="register-container15">
        <input type="checkbox" required className="register-checkbox" />
        <span className="register-stay-signed-in">{props.text1}</span>
        <span className="register-text16">{props.text3}</span>
      </div>
      <div className="register-container16">
        <Link to="/login" className="register-navlink">
          <ButtonLightBlue
            button="Register"
            rootClassName="button-light-blue-root-class-name4"
            className="register-component2"
          ></ButtonLightBlue>
        </Link>
        <span className="register-text17">{props.text2}</span>
        <LoginRegisterGoogle
          text3="Sign up with Google"
          rootClassName="login-register-google-root-class-name"
        ></LoginRegisterGoogle>
      </div>
    </div>
  )
}

Register.defaultProps = {
  textinput_placeholder: 'Email',
  textinput_placeholder2: 'Username',
  text: 'Reset password',
  rootClassName1: '',
  textinput_placeholder4: 'Last Name',
  text3: 'terms and conditions',
  textinput_placeholder1: 'password',
  textinput_placeholder3: 'First Name',
  rootClassName: '',
  text2: 'OR',
  text1: 'I agree with the',
  heading: 'REGISTER',
}

Register.propTypes = {
  textinput_placeholder: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  text: PropTypes.string,
  rootClassName1: PropTypes.string,
  textinput_placeholder4: PropTypes.string,
  text3: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  textinput_placeholder3: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
}

export default Register
