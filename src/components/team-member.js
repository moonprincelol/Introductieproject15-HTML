import React from 'react'

import PropTypes from 'prop-types'

import './team-member.css'

const TeamMember = (props) => {
  return (
    <div className={`team-member-feature-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="team-member-image"
      />
      <h2 className="team-member-text">{props.title}</h2>
    </div>
  )
}

TeamMember.defaultProps = {
  title: 'Lorem ipsum',
  image_alt: 'image',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGd1eSUyMHNtfGVufDB8fHx8MTY4NDU4MzYzNnww&ixlib=rb-4.0.3&w=200',
}

TeamMember.propTypes = {
  title: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default TeamMember
