import React from 'react'

import PropTypes from 'prop-types'

import './page-switching.css'

const PageSwitching = (props) => {
  return (
    <div className={`page-switching-container ${props.rootClassName} `}>
      <div className="page-switching-container1">
        <svg viewBox="0 0 1024 1024" className="page-switching-icon">
          <path
            d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
            className=""
          ></path>
        </svg>
      </div>
      <div className="page-switching-container2">
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="page-switching-textinput input-inverted"
        />
      </div>
      <div className="page-switching-container3">
        <svg viewBox="0 0 1024 1024" className="page-switching-icon2">
          <path
            d="M366 708l196-196-196-196 60-60 256 256-256 256z"
            className=""
          ></path>
        </svg>
      </div>
    </div>
  )
}

PageSwitching.defaultProps = {
  rootClassName: '',
  textinput_placeholder: '...',
}

PageSwitching.propTypes = {
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default PageSwitching
