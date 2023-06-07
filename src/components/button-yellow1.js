import React from 'react'

import PropTypes from 'prop-types'

import './button-yellow1.css'

const ButtonYellow1 = (props) => {
  return (
    <div className={`button-yellow1-container ${props.rootClassName} `}>
      <button className="button-yellow1-register Button">
        {props.button1}
      </button>
    </div>
  )
}

ButtonYellow1.defaultProps = {
  button1: 'Join',
  rootClassName: '',
}

ButtonYellow1.propTypes = {
  button1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ButtonYellow1
