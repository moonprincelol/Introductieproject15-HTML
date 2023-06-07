import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import LoginRegisterPassword from '../components/login-register-password'
import ButtonDarkBlue from '../components/button-dark-blue'
import FreePlan from '../components/free-plan'
import QuestionPost from '../components/question-post'
import MaterialPost from '../components/material-post'
import Footer from '../components/footer'
import './account.css'

const Account = (props) => {
  return (
    <div className="account-container">
      <Helmet>
        <title>Account - Introductieproject15</title>
        <meta property="og:title" content="Account - Introductieproject15" />
      </Helmet>
      <Header rootClassName="header-root-class-name5"></Header>
      <div className="account-account">
        <div className="account-account-details">
          <h1 className="account-text">
            <span>Your account details and more!</span>
            <br></br>
          </h1>
          <form className="account-form">
            <div className="account-username">
              <div className="account-container1">
                <svg viewBox="0 0 1024 1024" className="account-icon">
                  <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Username"
                className="account-textinput input-inverted"
              />
            </div>
            <div className="account-email">
              <div className="account-container2">
                <svg viewBox="0 0 1024 1024" className="account-icon02">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Email"
                autoComplete="email"
                className="account-textinput1 input-inverted"
              />
            </div>
            <div className="account-full-name">
              <div className="account-first-name">
                <div className="account-container3">
                  <svg viewBox="0 0 1024 1024" className="account-icon04">
                    <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="First Name"
                  autoComplete="given-name"
                  className="account-textinput2 input-inverted"
                />
              </div>
              <div className="account-last-name">
                <div className="account-container4">
                  <svg viewBox="0 0 1024 1024" className="account-icon06">
                    <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Last Name"
                  autoComplete="family-name"
                  className="account-textinput3 input-inverted"
                />
              </div>
            </div>
            <LoginRegisterPassword
              rootClassName="login-register-password-root-class-name4"
              textinput_placeholder1="Current Password"
            ></LoginRegisterPassword>
            <LoginRegisterPassword
              rootClassName="login-register-password-root-class-name2"
              textinput_placeholder1="New Password"
            ></LoginRegisterPassword>
            <LoginRegisterPassword
              rootClassName="login-register-password-root-class-name3"
              textinput_placeholder1="Repeat New Password"
            ></LoginRegisterPassword>
            <div className="account-dropdowns">
              <div data-thq="thq-dropdown" className="account-gender list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="account-dropdown-toggle"
                >
                  <div className="account-container5">
                    <svg viewBox="0 0 1024 1024" className="account-icon08">
                      <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                  </div>
                  <span className="account-text03">Gender</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="account-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="account-icon10">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="account-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="account-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="account-dropdown-toggle01"
                    >
                      <span className="account-text04">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="account-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="account-dropdown-toggle02"
                    >
                      <span className="account-text05">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="account-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="account-dropdown-toggle03"
                    >
                      <span className="account-text06">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="account-country list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="account-dropdown-toggle04"
                >
                  <div className="account-container6">
                    <svg viewBox="0 0 1024 1024" className="account-icon12">
                      <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                  </div>
                  <span className="account-text07">Country</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="account-dropdown-arrow1"
                  >
                    <svg viewBox="0 0 1024 1024" className="account-icon14">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="account-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="account-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="account-dropdown-toggle05"
                    >
                      <span className="account-text08">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="account-dropdown4 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="account-dropdown-toggle06"
                    >
                      <span className="account-text09">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="account-dropdown5 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="account-dropdown-toggle07"
                    >
                      <span className="account-text10">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="account-university list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="account-dropdown-toggle08"
                >
                  <div className="account-container7">
                    <svg viewBox="0 0 1024 1024" className="account-icon16">
                      <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                  </div>
                  <span className="account-text11">University</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="account-dropdown-arrow2"
                  >
                    <svg viewBox="0 0 1024 1024" className="account-icon18">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="account-dropdown-list2"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="account-dropdown6 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="account-dropdown-toggle09"
                    >
                      <span className="account-text12">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="account-dropdown7 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="account-dropdown-toggle10"
                    >
                      <span className="account-text13">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="account-dropdown8 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="account-dropdown-toggle11"
                    >
                      <span className="account-text14">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <ButtonDarkBlue
              button="log out"
              rootClassName="button-dark-blue-root-class-name5"
            ></ButtonDarkBlue>
          </form>
        </div>
        <div className="account-other-details">
          <div className="account-your-plan">
            <h1 className="account-text15">Your Plan</h1>
            <FreePlan rootClassName="free-plan-root-class-name"></FreePlan>
          </div>
          <div className="account-tokens">
            <h1 className="account-text16 Heading">Tokens</h1>
            <span>Payment history?</span>
          </div>
          <div className="account-asked-questions">
            <h1 className="account-text18 Heading">Asked Questions</h1>
            <QuestionPost rootClassName="question-post-root-class-name5"></QuestionPost>
          </div>
          <div className="account-answered-questions">
            <h1 className="account-text19 Heading">Answered Questions</h1>
            <QuestionPost rootClassName="question-post-root-class-name6"></QuestionPost>
          </div>
          <div className="account-uploaded-material">
            <h1 className="account-text20 Heading">Uploaded Material</h1>
            <MaterialPost rootClassName="material-post-root-class-name2"></MaterialPost>
          </div>
          <div className="account-redeemed-material">
            <h1 className="account-heading Heading">Redemed Material</h1>
            <MaterialPost rootClassName="material-post-root-class-name3"></MaterialPost>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  )
}

export default Account
