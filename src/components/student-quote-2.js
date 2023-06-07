import React from 'react'

import PropTypes from 'prop-types'

import './student-quote-2.css'

const StudentQuote2 = (props) => {
  return (
    <header
      className={`student-quote-2-testimonial-card ${props.rootClassName} `}
    >
      <svg viewBox="0 0 1024 1024" className="student-quote-2-icon">
        <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
      </svg>
      <div className="student-quote-2-testimonial">
        <span className="student-quote-2-text">{props.quote}</span>
        <img
          alt={props.picture_alt}
          src={props.picture_src}
          className="student-quote-2-image"
        />
        <span className="student-quote-2-text1">{props.name}</span>
      </div>
    </header>
  )
}

StudentQuote2.defaultProps = {
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.',
  rootClassName: '',
  name: 'John Doe',
  picture_alt: 'profile',
  picture_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
}

StudentQuote2.propTypes = {
  quote: PropTypes.string,
  rootClassName: PropTypes.string,
  name: PropTypes.string,
  picture_alt: PropTypes.string,
  picture_src: PropTypes.string,
}

export default StudentQuote2
