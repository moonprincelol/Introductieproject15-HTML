import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import StudyStrategy from '../components/study-strategy'
import StudentQuote2 from '../components/student-quote-2'
import Footer from '../components/footer'
import './study-tips.css'

const StudyTips = (props) => {
  return (
    <div className="study-tips-container">
      <Helmet>
        <title>Study-Tips - Introductieproject15</title>
        <meta property="og:title" content="Study-Tips - Introductieproject15" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="study-tips-features">
        <div className="study-tips-container1">
          <h1 className="study-tips-text">
            <span>THE BEST STUDY STRATEGIES</span>
            <br></br>
          </h1>
          <span className="study-tips-text3">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
              lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam
              pellentesque nulla leo, sagittis vehicula sem commodo nec.​
            </span>
            <span></span>
          </span>
          <div className="study-tips-container2">
            <StudyStrategy
              title="Summary"
              description="Make a summary of important topics"
              rootClassName="rootClassName"
            ></StudyStrategy>
            <StudyStrategy
              title="Repeat"
              description="Often revise your summary for optimum efficiency"
              rootClassName="rootClassName3"
            ></StudyStrategy>
            <StudyStrategy
              title="Practise"
              description="Make practice questions and excercises"
              rootClassName="rootClassName5"
            ></StudyStrategy>
            <StudyStrategy
              title="Review"
              description="Review your mistakes and learn from them"
              rootClassName="rootClassName1"
            ></StudyStrategy>
          </div>
        </div>
      </div>
      <div className="study-tips-testimonial">
        <h1 className="study-tips-text6">TIPS FROM STUDENTS</h1>
        <span className="study-tips-text7">
          Here you can read some tips from students who use our website
        </span>
        <div className="study-tips-container3">
          <StudentQuote2
            picture_src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxtYW58ZW58MHx8fHwxNjI2NDUyMDM1&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName"
          ></StudentQuote2>
          <StudentQuote2
            picture_src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtYW58ZW58MHx8fHwxNjI2NDUyMDM1&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName"
          ></StudentQuote2>
          <StudentQuote2
            picture_src="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName"
          ></StudentQuote2>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default StudyTips
