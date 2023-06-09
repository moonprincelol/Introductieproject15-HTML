import React from 'react'

import PropTypes from 'prop-types'

import './explanation.css'

const Explanation = (props) => {
  return (
    <div className={`explanation-container ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="explanation-icon">
        <path
          d="M746 612q52 0 108 10v64q-40-10-108-10-120 0-192 42v-72q76-34 192-34zM554 532q84-34 192-34 52 0 108 10v64q-40-10-108-10-120 0-192 42v-72zM746 448q-120 0-192 42v-70q80-36 192-36 52 0 108 10v66q-48-12-108-12zM896 790v-492q-66-20-150-20-130 0-234 64v490q104-64 234-64 78 0 150 22zM746 192q152 0 236 64v622q0 8-7 15t-15 7q-6 0-10-2-82-44-204-44-130 0-234 64-86-64-234-64-108 0-204 46-2 0-5 1t-5 1q-8 0-15-6t-7-14v-626q86-64 236-64 148 0 234 64 86-64 234-64z"
          className=""
        ></path>
      </svg>
      <div className="explanation-container1">
        <h2 className="explanation-text Heading2">{props.heading}</h2>
        <span className="explanation-text1">{props.text}</span>
      </div>
    </div>
  )
}

Explanation.defaultProps = {
  heading: 'Why upload your material?',
  rootClassName: '',
  text: 'By uploading your study material and contributing to the platform you help other students to prepare for their exams and other deadlines. As a reward you receive 1 or more tokens when the material is received well by students.',
}

Explanation.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Explanation
