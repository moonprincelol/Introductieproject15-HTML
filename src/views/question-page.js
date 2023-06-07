import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './question-page.css'

const QuestionPage = (props) => {
  return (
    <div className="question-page-container">
      <Helmet>
        <title>Question-Page - Introductieproject15</title>
        <meta
          property="og:title"
          content="Question-Page - Introductieproject15"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name16"></Header>
      <div className="question-page-container01">
        <div className="question-page-info">
          <h1 className="question-page-text">Question title</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
          </span>
        </div>
        <div className="question-page-tags-interactions">
          <div className="question-page-container02">
            <span className="question-page-text02">COURSE</span>
            <span className="question-page-text03">material type</span>
          </div>
          <div className="question-page-container03">
            <div className="question-page-container04">
              <div className="question-page-container05">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="question-page-icon"
                >
                  <path d="M731.429 768c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM877.714 768c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM950.857 640v182.857c0 30.286-24.571 54.857-54.857 54.857h-841.143c-30.286 0-54.857-24.571-54.857-54.857v-182.857c0-30.286 24.571-54.857 54.857-54.857h265.714l77.143 77.714c21.143 20.571 48.571 32 77.714 32s56.571-11.429 77.714-32l77.714-77.714h265.143c30.286 0 54.857 24.571 54.857 54.857zM765.143 314.857c5.714 13.714 2.857 29.714-8 40l-256 256c-6.857 7.429-16.571 10.857-25.714 10.857s-18.857-3.429-25.714-10.857l-256-256c-10.857-10.286-13.714-26.286-8-40 5.714-13.143 18.857-22.286 33.714-22.286h146.286v-256c0-20 16.571-36.571 36.571-36.571h146.286c20 0 36.571 16.571 36.571 36.571v256h146.286c14.857 0 28 9.143 33.714 22.286z"></path>
                </svg>
              </div>
              <span className="question-page-text04">55</span>
            </div>
            <div className="question-page-container06">
              <div className="question-page-container07">
                <svg
                  viewBox="0 0 731.4285714285713 1024"
                  className="question-page-icon02"
                >
                  <path d="M665.143 73.143c8.571 0 17.143 1.714 25.143 5.143 25.143 9.714 41.143 33.143 41.143 58.857v736.571c0 25.714-16 49.143-41.143 58.857-8 3.429-16.571 4.571-25.143 4.571-17.714 0-34.286-6.286-47.429-18.286l-252-242.286-252 242.286c-13.143 12-29.714 18.857-47.429 18.857-8.571 0-17.143-1.714-25.143-5.143-25.143-9.714-41.143-33.143-41.143-58.857v-736.571c0-25.714 16-49.143 41.143-58.857 8-3.429 16.571-5.143 25.143-5.143h598.857z"></path>
                </svg>
              </div>
              <span className="question-page-text05">20</span>
            </div>
            <div className="question-page-container08">
              <div className="question-page-container09">
                <svg viewBox="0 0 1024 1024" className="question-page-icon04">
                  <path d="M512 950.857c-9.143 0-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429 0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286z"></path>
                </svg>
              </div>
              <span className="question-page-text06">55</span>
            </div>
          </div>
        </div>
        <div className="question-page-user">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="question-page-image"
          />
          <div className="question-page-container10">
            <span>username</span>
            <span>5</span>
            <span>hours</span>
            <span>ago</span>
          </div>
        </div>
        <div className="question-page-container11">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1682687979601-082a1295b78f?ixid=M3w5MTMyMXwxfDF8YWxsfDF8fHx8fHwyfHwxNjg0NzY3NzY4fA&amp;ixlib=rb-4.0.3&amp;w=200"
            className="question-page-image1"
          />
          <span className="question-page-text11">
            <span>
              ❗ By answering this question correctly you earn 1 token ❗
            </span>
            <br></br>
          </span>
        </div>
        <div className="question-page-container12">
          <div className="question-page-container13">
            <form className="question-page-form">
              <textarea
                disabled
                placeholder="Write your answer here"
                className="question-page-textarea textarea"
              ></textarea>
            </form>
          </div>
          <div className="question-page-comment-good-answer">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="question-page-icon06"
            >
              <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <div className="question-page-container14">
              <span>This is an answer to the question</span>
            </div>
          </div>
          <div className="question-page-comment-good-answer1">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="question-page-icon08"
            >
              <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <div className="question-page-container15">
              <span>This is an answer to the question</span>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name16"></Footer>
    </div>
  )
}

export default QuestionPage
