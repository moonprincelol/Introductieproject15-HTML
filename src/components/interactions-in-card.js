import React from 'react'

import PropTypes from 'prop-types'

import './interactions-in-card.css'

const InteractionsInCard = (props) => {
  return (
    <div className={`interactions-in-card-container ${props.rootClassName} `}>
      <div className="interactions-in-card-container1">
        <div className="interactions-in-card-container2">
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className="interactions-in-card-icon"
          >
            <path
              d="M731.429 768c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM877.714 768c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM950.857 640v182.857c0 30.286-24.571 54.857-54.857 54.857h-841.143c-30.286 0-54.857-24.571-54.857-54.857v-182.857c0-30.286 24.571-54.857 54.857-54.857h265.714l77.143 77.714c21.143 20.571 48.571 32 77.714 32s56.571-11.429 77.714-32l77.714-77.714h265.143c30.286 0 54.857 24.571 54.857 54.857zM765.143 314.857c5.714 13.714 2.857 29.714-8 40l-256 256c-6.857 7.429-16.571 10.857-25.714 10.857s-18.857-3.429-25.714-10.857l-256-256c-10.857-10.286-13.714-26.286-8-40 5.714-13.143 18.857-22.286 33.714-22.286h146.286v-256c0-20 16.571-36.571 36.571-36.571h146.286c20 0 36.571 16.571 36.571 36.571v256h146.286c14.857 0 28 9.143 33.714 22.286z"
              className=""
            ></path>
          </svg>
        </div>
        <span className="interactions-in-card-text">{props.text5}</span>
      </div>
      <div className="interactions-in-card-container3">
        <div className="interactions-in-card-container4">
          <svg
            viewBox="0 0 731.4285714285713 1024"
            className="interactions-in-card-icon2"
          >
            <path
              d="M665.143 73.143c8.571 0 17.143 1.714 25.143 5.143 25.143 9.714 41.143 33.143 41.143 58.857v736.571c0 25.714-16 49.143-41.143 58.857-8 3.429-16.571 4.571-25.143 4.571-17.714 0-34.286-6.286-47.429-18.286l-252-242.286-252 242.286c-13.143 12-29.714 18.857-47.429 18.857-8.571 0-17.143-1.714-25.143-5.143-25.143-9.714-41.143-33.143-41.143-58.857v-736.571c0-25.714 16-49.143 41.143-58.857 8-3.429 16.571-5.143 25.143-5.143h598.857z"
              className=""
            ></path>
          </svg>
        </div>
        <span className="interactions-in-card-text1">{props.text51}</span>
      </div>
      <div className="interactions-in-card-container5">
        <div className="interactions-in-card-container6">
          <svg viewBox="0 0 1024 1024" className="interactions-in-card-icon4">
            <path
              d="M512 950.857c-9.143 0-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429 0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286z"
              className=""
            ></path>
          </svg>
        </div>
        <span className="interactions-in-card-text2">{props.text52}</span>
      </div>
    </div>
  )
}

InteractionsInCard.defaultProps = {
  text52: '55',
  text5: '55',
  text51: '20',
  text521: 'Report!',
  rootClassName: '',
}

InteractionsInCard.propTypes = {
  text52: PropTypes.string,
  text5: PropTypes.string,
  text51: PropTypes.string,
  text521: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default InteractionsInCard
