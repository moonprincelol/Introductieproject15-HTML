import React from 'react'

import PropTypes from 'prop-types'

import './button-yellow.css'

const ButtonYellow = (props) => {
  return (
    <div className={`button-yellow-container ${props.rootClassName} `}>
      <button className="button-yellow-register Button">{props.button1}</button>
    </div>
  )
}

ButtonYellow.defaultProps = {
  rootClassName: '',
  button1: 'Join',
}

ButtonYellow.propTypes = {
  rootClassName: PropTypes.string,
  button1: PropTypes.string,
}

export default ButtonYellow
