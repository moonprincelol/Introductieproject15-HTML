import React from 'react'

import PropTypes from 'prop-types'

import './free-plan.css'

const FreePlan = (props) => {
  return (
    <div className={`free-plan-container ${props.rootClassName} `}>
      <span className="free-plan-text">{props.text}</span>
      <span className="free-plan-text01">
        <span className="free-plan-text02">$</span>
        <span className="free-plan-text03">0</span>
      </span>
      <span className="free-plan-text04">
        <span className="free-plan-text05">10</span>
        <span className=""> Start points</span>
      </span>
      <span className="free-plan-text07">
        <span className="free-plan-text08">+1</span>
        <span className=""> For each correct answer</span>
      </span>
      <span className="free-plan-text10">
        <span className="free-plan-text11">+1</span>
        <span className=""> For each upload</span>
      </span>
      <span className="free-plan-text13">{props.text1}</span>
      <span className="free-plan-text14">{props.Text}</span>
    </div>
  )
}

FreePlan.defaultProps = {
  text1: 'NO ADS',
  rootClassName: '',
  text: 'Free',
  Text: 'NO OTHER LIMITS',
}

FreePlan.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  Text: PropTypes.string,
}

export default FreePlan
