import React from 'react'

import PropTypes from 'prop-types'

import './button-light-blue.css'

const ButtonLightBlue = (props) => {
  return (
    <div className={`button-light-blue-container ${props.rootClassName} `}>
      <button className="button-light-blue-button Button">
        {props.button}
      </button>
    </div>
  )
}

ButtonLightBlue.defaultProps = {
  button: 'SHARE',
  rootClassName: '',
}

ButtonLightBlue.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ButtonLightBlue
