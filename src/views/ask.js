import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ButtonYellow1 from '../components/button-yellow1'
import SocialBar from '../components/social-bar'
import Footer from '../components/footer'
import './ask.css'

const Ask = (props) => {
  return (
    <div className="ask-container">
      <Helmet>
        <title>Ask - Introductieproject15</title>
        <meta property="og:title" content="Ask - Introductieproject15" />
      </Helmet>
      <Header rootClassName="header-root-class-name10"></Header>
      <div className="ask-container1">
        <h1 className="ask-text">
          <span>Ask your question here!</span>
          <br></br>
        </h1>
        <form className="ask-form">
          <span className="ask-text3">Title your question briefly</span>
          <input
            type="text"
            required
            autoFocus
            placeholder="Type here..."
            className="ask-textinput input"
          />
          <span className="ask-text4">
            Describe the context of your question as complete as possible
          </span>
          <textarea
            required="1"
            placeholder="Type here..."
            className="ask-textarea textarea"
          ></textarea>
          <span className="ask-text5">For which course is the question?</span>
          <select required className="ask-select">
            <option value="-" selected>
              -
            </option>
            <option value="Vak 1">Vak 1</option>
            <option value="Vak 2">Vak 2</option>
          </select>
          <span className="ask-text6">
            <span>❗ Asking this question deducts 1 token ❗</span>
            <br></br>
          </span>
          <Link to="/question-board" className="ask-navlink">
            <ButtonYellow1
              button1="Submit"
              rootClassName="button-yellow1-root-class-name"
              className="ask-component1"
            ></ButtonYellow1>
          </Link>
        </form>
      </div>
      <SocialBar rootClassName="social-bar-root-class-name"></SocialBar>
      <Footer rootClassName="footer-root-class-name10"></Footer>
    </div>
  )
}

export default Ask
