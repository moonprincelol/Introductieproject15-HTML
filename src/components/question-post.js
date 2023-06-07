import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import InteractionsInCard from './interactions-in-card'
import './question-post.css'

const QuestionPost = (props) => {
  return (
    <div className={`question-post-blog-post-card ${props.rootClassName} `}>
      <div className="question-post-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="question-post-image"
        />
        <div className="question-post-container1">
          <div className="question-post-container2">
            <span className="question-post-text">{props.label}</span>
            <span className="question-post-text1">{props.text7}</span>
          </div>
          <h1 className="question-post-text2">{props.title}</h1>
          <div className="question-post-container3">
            <span className="">{props.text6}</span>
            <Link to="/question-page" className="question-post-navlink">
              Read More
            </Link>
          </div>
          <div className="question-post-container4">
            <InteractionsInCard
              rootClassName="interactions-in-card-root-class-name1"
              className=""
            ></InteractionsInCard>
            <div className="question-post-container5">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="question-post-image1"
              />
              <div className="question-post-container6">
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

QuestionPost.defaultProps = {
  title: 'Material title',
  rootClassName: '',
  label: 'COURSE',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  image_src:
    'https://images.unsplash.com/photo-1682687979601-082a1295b78f?ixid=M3w5MTMyMXwxfDF8YWxsfDF8fHx8fHwyfHwxNjg0NzY3NzY4fA&ixlib=rb-4.0.3&w=200',
  author: 'By',
  text4: 'ago',
  text: 'username',
  text5: '55',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt1: 'image',
  text6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ...',
  text1: 'Last Name',
  text7: 'SUPERQUESTION',
  text52: '55',
  text51: '20',
  image_alt: 'image',
  text2: '5',
  text3: 'hours',
}

QuestionPost.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  image_src: PropTypes.string,
  author: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text5: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  text6: PropTypes.string,
  text1: PropTypes.string,
  text7: PropTypes.string,
  text52: PropTypes.string,
  text51: PropTypes.string,
  image_alt: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
}

export default QuestionPost
