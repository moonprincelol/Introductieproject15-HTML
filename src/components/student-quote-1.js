import React from 'react'

import PropTypes from 'prop-types'

import './student-quote-1.css'

const StudentQuote1 = (props) => {
  return (
    <div className={`student-quote-1-testimonial-card ${props.rootClassName} `}>
      <svg
        viewBox="0 0 950.8571428571428 1024"
        className="student-quote-1-icon"
      >
        <path
          d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"
          className=""
        ></path>
      </svg>
      <div className="student-quote-1-testimonial">
        <span className="student-quote-1-text">{props.quote}</span>
        <span className="student-quote-1-text1">{props.name}</span>
        <span className="student-quote-1-text2">{props.role}</span>
        <img
          alt={props.picture_alt}
          src={props.picture_src}
          className="student-quote-1-image"
        />
      </div>
    </div>
  )
}

StudentQuote1.defaultProps = {
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.',
  picture_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  role: 'INFORMATION SCIENCE',
  name: 'Jane Doe',
  rootClassName: '',
  picture_alt: 'profile',
}

StudentQuote1.propTypes = {
  quote: PropTypes.string,
  picture_src: PropTypes.string,
  role: PropTypes.string,
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  picture_alt: PropTypes.string,
}

export default StudentQuote1
