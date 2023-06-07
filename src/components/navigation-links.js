import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/about-us" className="navigation-links-about-us">
        {props.text}
      </Link>
      <div data-thq="thq-dropdown" className="navigation-links-study list-item">
        <div
          data-thq="thq-dropdown-toggle"
          className="navigation-links-dropdown-toggle"
        >
          <span className="navigation-links-text">
            <span className="">📚</span>
            <span className="Content">Study</span>
          </span>
          <div
            data-thq="thq-dropdown-arrow"
            className="navigation-links-dropdown-arrow"
          >
            <svg viewBox="0 0 1024 1024" className="navigation-links-icon">
              <path d="M426 726v-428l214 214z" className=""></path>
            </svg>
          </div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="navigation-links-dropdown-list"
        >
          <li
            data-thq="thq-dropdown"
            className="navigation-links-dropdown list-item"
          >
            <Link to="/share-upload" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="navigation-links-dropdown-toggle1"
              >
                <span className="navigation-links-text3 Content">Share</span>
              </div>
            </Link>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links-dropdown1 list-item"
          >
            <Link to="/learn-download" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="navigation-links-dropdown-toggle2"
              >
                <span className="navigation-links-text4 Content">Learn</span>
              </div>
            </Link>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links-dropdown2 list-item"
          >
            <Link to="/study-tips" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="navigation-links-dropdown-toggle3"
              >
                <span className="navigation-links-text5 Content">Tips</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navigation-links-tokens">
        <Link to="/tokens" className="navigation-links-text6">
          {props.text2}
        </Link>
        <span className="navigation-links-token-amount">{props.text6}</span>
      </div>
      <Link to="/question-board" className="navigation-links-question-board">
        {props.text4}
      </Link>
      <Link to="/account" className="navigation-links-navlink3">
        <div className="navigation-links-account">
          <svg viewBox="0 0 1024 1024" className="navigation-links-icon2">
            <path
              d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
              className=""
            ></path>
          </svg>
          <div className="navigation-links-container">
            <span className="">{props.text5}</span>
            <span className="navigation-links-text8">{props.text7}</span>
          </div>
        </div>
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  text3: 'Study',
  text1: 'Strategies',
  text: '👋About us',
  text4: '📌Question Board',
  text7: 'View profile',
  text6: '13',
  text5: 'Username',
  text2: '💰Tokens',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text7: PropTypes.string,
  text6: PropTypes.string,
  text5: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks
