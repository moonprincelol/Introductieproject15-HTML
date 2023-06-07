import React from 'react'

import PropTypes from 'prop-types'

import './button-dark-blue.css'

const ButtonDarkBlue = (props) => {
  return (
    <div className={`button-dark-blue-container ${props.rootClassName} `}>
      <button className="button-dark-blue-button Button">{props.button}</button>
    </div>
  )
}

ButtonDarkBlue.defaultProps = {
  rootClassName: '',
  button: 'Upload Files',
}

ButtonDarkBlue.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default ButtonDarkBlue
