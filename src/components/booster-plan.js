import React from 'react'

import PropTypes from 'prop-types'

import ButtonDarkBlue from './button-dark-blue'
import './booster-plan.css'

const BoosterPlan = (props) => {
  return (
    <div className="booster-plan-container">
      <span className="booster-plan-text">{props.text}</span>
      <span className="booster-plan-text01">
        <span className="booster-plan-text02">$</span>
        <span className="booster-plan-text03">8</span>
        <span className="booster-plan-text04">/month</span>
      </span>
      <span className="booster-plan-text05">
        <span>
          +5
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="booster-plan-text07">Tokens</span>
      </span>
      <span className="booster-plan-text08">
        <span>
          2x
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="booster-plan-text10">Faster token acquisition</span>
      </span>
      <span className="booster-plan-text11">
        <span>
          1
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="booster-plan-text13">Super question</span>
      </span>
      <ButtonDarkBlue
        button="Learn more"
        rootClassName="button-dark-blue-root-class-name"
      ></ButtonDarkBlue>
    </div>
  )
}

BoosterPlan.defaultProps = {
  text: 'BOOSTER',
}

BoosterPlan.propTypes = {
  text: PropTypes.string,
}

export default BoosterPlan
