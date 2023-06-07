import React from 'react'

import PropTypes from 'prop-types'

import './sort-amount.css'

const SortAmount = (props) => {
  return (
    <div className={`sort-amount-container ${props.rootClassName} `}>
      <div className="sort-amount-container1">
        <select
          id="shownAmount"
          name="shownAmount"
          className="sort-amount-select"
        >
          <option value="Shown amount" selected className="">
            Shown amount
          </option>
          <option value="10" className="">
            10
          </option>
          <option value="50" className="">
            50
          </option>
        </select>
      </div>
      <div className="sort-amount-container2">
        <select id="sortBy" name="sortBy" className="sort-amount-select1">
          <option value="Sort by" selected className="">
            Sort by
          </option>
          <option value="Latest" className="">
            Latest
          </option>
          <option value="Best" className="">
            Best
          </option>
        </select>
      </div>
    </div>
  )
}

SortAmount.defaultProps = {
  rootClassName: '',
}

SortAmount.propTypes = {
  rootClassName: PropTypes.string,
}

export default SortAmount
