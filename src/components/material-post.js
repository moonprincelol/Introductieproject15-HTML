import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import InteractionsInCard from './interactions-in-card'
import './material-post.css'

const MaterialPost = (props) => {
  return (
    <div className={`material-post-blog-post-card ${props.rootClassName} `}>
      <div className="material-post-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="material-post-image"
        />
        <div className="material-post-container1">
          <div className="material-post-container2">
            <span className="material-post-text">{props.label}</span>
            <span className="material-post-text1">{props.label1}</span>
            <div className="material-post-container3">
              <div className="material-post-container4">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="material-post-icon"
                >
                  <path
                    d="M749.714 510.286c0-62.286-18.286-120-49.714-168.571l-430.857 430.286c49.143 32 107.429 50.857 169.714 50.857 171.429 0 310.857-140 310.857-312.571zM178.857 681.143l431.429-430.857c-49.143-33.143-108-52-171.429-52-171.429 0-310.857 140-310.857 312 0 63.429 18.857 121.714 50.857 170.857zM877.714 510.286c0 243.429-196.571 440.571-438.857 440.571s-438.857-197.143-438.857-440.571c0-242.857 196.571-440 438.857-440s438.857 197.143 438.857 440z"
                    className=""
                  ></path>
                </svg>
                <span className="material-post-text2">Report!</span>
              </div>
            </div>
          </div>
          <h1 className="material-post-text3">{props.title}</h1>
          <div className="material-post-container5">
            <span className="">{props.text6}</span>
            <Link to="/material-page" className="material-post-navlink">
              Read More
            </Link>
          </div>
          <div className="material-post-container6">
            <InteractionsInCard className=""></InteractionsInCard>
            <div className="material-post-container7">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="material-post-image1"
              />
              <div className="material-post-container8">
                <span className="">{props.text}</span>
                <span className="">{props.text2}</span>
                <span className="">{props.text3}</span>
                <span className="">{props.text4}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

MaterialPost.defaultProps = {
  image_alt1: 'image',
  image_alt: 'image',
  text7: 'SUPERQUESTION',
  image_src:
    'https://images.unsplash.com/photo-1682687979601-082a1295b78f?ixid=M3w5MTMyMXwxfDF8YWxsfDF8fHx8fHwyfHwxNjg0NzY3NzY4fA&ixlib=rb-4.0.3&w=200',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'username',
  text2: '5',
  label: 'COURSE',
  text3: 'hours',
  text4: 'ago',
  label1: 'material type',
  title: 'Material title',
  rootClassName: '',
  text6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ...',
}

MaterialPost.propTypes = {
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  text7: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  label: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  label1: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  text6: PropTypes.string,
}

export default MaterialPost
