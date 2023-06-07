import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import LoginRegisterGoogle from '../components/login-register-google'
import Footer from '../components/footer'
import './login.css'

const LOGIN = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>LOGIN - Introductieproject15</title>
        <meta property="og:title" content="LOGIN - Introductieproject15" />
      </Helmet>
      <Header rootClassName="header-root-class-name12"></Header>
      <div className="login-container01">
        <div className="login-container02">
          <div className="login-container03">
            <h1 className="login-text">LOGIN</h1>
            <span className="login-text1">
              <span>Welcome back!</span>
              <br></br>
            </span>
          </div>
          <form className="login-form">
            <div className="login-container04">
              <div className="login-container05">
                <svg viewBox="0 0 1024 1024" className="login-icon">
                  <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
                </svg>
              </div>
              <input
                type="text"
                id="email"
                placeholder="username or email"
                className="login-textinput input-inverted"
              />
            </div>
            <div className="login-container06">
              <div className="login-container07">
                <svg
                  viewBox="0 0 658.2857142857142 1024"
                  className="login-icon2"
                >
                  <path d="M182.857 438.857h292.571v-109.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v109.714zM658.286 493.714v329.143c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-329.143c0-30.286 24.571-54.857 54.857-54.857h18.286v-109.714c0-140.571 115.429-256 256-256s256 115.429 256 256v109.714h18.286c30.286 0 54.857 24.571 54.857 54.857z"></path>
                </svg>
              </div>
              <input
                type="text"
                id="password"
                placeholder="password"
                className="login-textinput1 input-inverted"
              />
              <svg viewBox="0 0 1024 1024" className="login-icon4">
                <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
              </svg>
            </div>
          </form>
          <div className="login-container08">
            <div className="login-container09">
              <input type="checkbox" checked className="login-checkbox" />
              <span className="login-stay-signed-in">Remember me</span>
            </div>
            <span className="login-text4">Reset password</span>
          </div>
          <div className="login-container10">
            <div className="login-container11">
              <button
                id="saveData"
                type="submit"
                className="login-button Button"
              >
                LOGIN
              </button>
            </div>
            <span className="login-text5">OR</span>
            <LoginRegisterGoogle></LoginRegisterGoogle>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name12"></Footer>
    </div>
  )
}

export default LOGIN
