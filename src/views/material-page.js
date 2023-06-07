import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import InteractionsInCard from '../components/interactions-in-card'
import ButtonDarkBlue from '../components/button-dark-blue'
import Footer from '../components/footer'
import './material-page.css'

const MaterialPage = (props) => {
  return (
    <div className="material-page-container">
      <Helmet>
        <title>Material-Page - Introductieproject15</title>
        <meta
          property="og:title"
          content="Material-Page - Introductieproject15"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name14"></Header>
      <div className="material-page-container1">
        <div className="material-page-container2">
          <h1 className="material-page-text">Material title</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
          </span>
        </div>
        <div className="material-page-container3">
          <div className="material-page-container4">
            <span className="material-page-text02">COURSE</span>
            <span className="material-page-text03">material type</span>
          </div>
          <InteractionsInCard rootClassName="interactions-in-card-root-class-name"></InteractionsInCard>
        </div>
        <div className="material-page-container5">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="material-page-image"
          />
          <div className="material-page-container6">
            <span>username</span>
            <span>5</span>
            <span>hours</span>
            <span>ago</span>
          </div>
        </div>
        <div className="material-page-container7">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1682687979601-082a1295b78f?ixid=M3w5MTMyMXwxfDF8YWxsfDF8fHx8fHwyfHwxNjg0NzY3NzY4fA&amp;ixlib=rb-4.0.3&amp;w=200"
            className="material-page-image1"
          />
          <div className="material-page-container8">
            <span className="material-page-text08">
              <span>❗ Downloading this material deducts 1 token ❗</span>
              <br></br>
            </span>
            <ButtonDarkBlue
              button="Download"
              rootClassName="button-dark-blue-root-class-name6"
            ></ButtonDarkBlue>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name14"></Footer>
    </div>
  )
}

export default MaterialPage
