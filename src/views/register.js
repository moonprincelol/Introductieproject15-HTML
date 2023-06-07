import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './register.css'

const REGISTER = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>REGISTER - Introductieproject15</title>
        <meta property="og:title" content="REGISTER - Introductieproject15" />
      </Helmet>
      <Header rootClassName="header-root-class-name13"></Header>
      <div className="register-container01">
        <div className="register-container02">
          <div className="register-container03">
            <h1 className="register-text">REGISTER</h1>
            <span className="register-text1">
              <span>
                Welcome to our platform! We just need a few details before you
                can continue
              </span>
              <br></br>
            </span>
          </div>
          <form className="register-form">
            <div className="register-container04">
              <div className="register-container05">
                <svg viewBox="0 0 1024 1024" className="register-icon">
                  <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
                </svg>
              </div>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                className="register-textinput input-inverted"
              />
            </div>
            <div className="register-container06">
              <div className="register-container07">
                <svg viewBox="0 0 1024 1024" className="register-icon02">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
              </div>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                className="register-textinput1 input-inverted"
              />
            </div>
            <div className="register-container08">
              <div className="register-container09">
                <div className="register-container10">
                  <svg viewBox="0 0 1024 1024" className="register-icon04">
                    <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="firstname"
                  placeholder="First Name"
                  autoComplete="given-name"
                  className="register-textinput2 input-inverted"
                />
              </div>
              <div className="register-container11">
                <div className="register-container12">
                  <svg viewBox="0 0 1024 1024" className="register-icon06">
                    <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  autoComplete="family-name"
                  className="register-textinput3 input-inverted"
                />
              </div>
            </div>
            <div className="register-container13">
              <div className="register-container14">
                <svg
                  viewBox="0 0 658.2857142857142 1024"
                  className="register-icon08"
                >
                  <path d="M182.857 438.857h292.571v-109.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v109.714zM658.286 493.714v329.143c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-329.143c0-30.286 24.571-54.857 54.857-54.857h18.286v-109.714c0-140.571 115.429-256 256-256s256 115.429 256 256v109.714h18.286c30.286 0 54.857 24.571 54.857 54.857z"></path>
                </svg>
              </div>
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Password"
                className="register-textinput4 input-inverted"
              />
              <svg viewBox="0 0 1024 1024" className="register-icon10">
                <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
              </svg>
            </div>
            <div className="register-container15">
              <div className="register-container16">
                <svg
                  viewBox="0 0 658.2857142857142 1024"
                  className="register-icon12"
                >
                  <path d="M182.857 438.857h292.571v-109.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v109.714zM658.286 493.714v329.143c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-329.143c0-30.286 24.571-54.857 54.857-54.857h18.286v-109.714c0-140.571 115.429-256 256-256s256 115.429 256 256v109.714h18.286c30.286 0 54.857 24.571 54.857 54.857z"></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Repeat Password"
                className="register-textinput5 input-inverted"
              />
              <svg viewBox="0 0 1024 1024" className="register-icon14">
                <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
              </svg>
            </div>
          </form>
          <div className="register-container17">
            <input type="checkbox" required className="register-checkbox" />
            <span className="register-stay-signed-in">I agree with the</span>
            <span className="register-text4">terms and conditions</span>
          </div>
          <div className="register-container18">
            <div className="register-container19">
              <button
                id="signUp"
                name="signup_submit"
                type="submit"
                className="register-button Button"
              >
                Register
              </button>
            </div>
            <span className="register-text5">OR</span>
            <div className="signInWithGoogle">
              <img
                alt="image"
                src="1df8d7f7-5876-41f4-a8ad-a180c3ea8205"
                className="register-image"
              />
              <span className="register-text6">Sign up with Google</span>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name13"></Footer>
    </div>
  )
}

export default REGISTER
