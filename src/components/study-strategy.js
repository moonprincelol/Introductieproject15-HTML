import React from 'react'

import PropTypes from 'prop-types'

import './study-strategy.css'

const StudyStrategy = (props) => {
  return (
    <div className={`study-strategy-feature-card ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="study-strategy-icon">
        <path
          d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"
          className=""
        ></path>
      </svg>
      <h2 className="study-strategy-text">{props.title}</h2>
      <span className="study-strategy-text1">{props.description}</span>
      <span className="study-strategy-text2">{props.action}</span>
    </div>
  )
}

StudyStrategy.defaultProps = {
  title: 'Strategy',
  rootClassName: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  action: 'SEE MORE',
}

StudyStrategy.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.string,
}

export default StudyStrategy
