import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ButtonLightBlue from '../components/button-light-blue'
import ButtonDarkBlue from '../components/button-dark-blue'
import Explanation from '../components/explanation'
import SearchFilters from '../components/search-filters'
import SortAmount from '../components/sort-amount'
import QuestionPost from '../components/question-post'
import PageSwitching from '../components/page-switching'
import Footer from '../components/footer'
import './question-board.css'

const QuestionBoard = (props) => {
  return (
    <div className="question-board-container">
      <Helmet>
        <title>Question-Board - Introductieproject15</title>
        <meta
          property="og:title"
          content="Question-Board - Introductieproject15"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name9"></Header>
      <div className="question-board-container1">
        <h1 className="question-board-text">
          <span>Support and receive support</span>
          <br></br>
        </h1>
        <div className="question-board-answer-ask">
          <a href="#question-section" className="question-board-link">
            <ButtonLightBlue
              button="answer"
              rootClassName="button-light-blue-root-class-name"
              className="question-board-component01"
            ></ButtonLightBlue>
          </a>
          <span className="question-board-text3">OR</span>
          <Link to="/ask" className="question-board-navlink">
            <ButtonDarkBlue
              button="ask"
              rootClassName="button-dark-blue-root-class-name3"
              className="question-board-component02"
            ></ButtonDarkBlue>
          </Link>
        </div>
      </div>
      <div className="question-board-how-it-works">
        <h1 className="question-board-text4 Heading">
          <span>How it works</span>
          <br></br>
          <br></br>
        </h1>
        <Explanation rootClassName="explanation-root-class-name"></Explanation>
        <Explanation rootClassName="explanation-root-class-name1"></Explanation>
        <Explanation rootClassName="explanation-root-class-name2"></Explanation>
      </div>
      <SearchFilters rootClassName="search-filters-root-class-name"></SearchFilters>
      <div id="question-section" className="question-board-blog">
        <h1 className="question-board-text8">Top 3 Uploads of the Month</h1>
        <SortAmount rootClassName="sort-amount-root-class-name"></SortAmount>
        <QuestionPost rootClassName="question-post-root-class-name"></QuestionPost>
        <QuestionPost rootClassName="question-post-root-class-name4"></QuestionPost>
        <QuestionPost rootClassName="question-post-root-class-name3"></QuestionPost>
        <div className="question-board-container2">
          <PageSwitching rootClassName="page-switching-root-class-name"></PageSwitching>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name9"></Footer>
    </div>
  )
}

export default QuestionBoard
