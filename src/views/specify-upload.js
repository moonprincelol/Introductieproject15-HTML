import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ButtonYellow from '../components/button-yellow'
import SocialBar from '../components/social-bar'
import Footer from '../components/footer'
import './specify-upload.css'

const SpecifyUpload = (props) => {
  return (
    <div className="specify-upload-container">
      <Helmet>
        <title>Specify-Upload - Introductieproject15</title>
        <meta
          property="og:title"
          content="Specify-Upload - Introductieproject15"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name11"></Header>
      <div className="specify-upload-container1">
        <h1 className="specify-upload-text">
          <span>Make your material discoverable!</span>
          <br></br>
        </h1>
        <form className="specify-upload-form">
          <span className="specify-upload-text03">
            Title your material briefly
          </span>
          <input
            type="text"
            required
            autoFocus
            placeholder="Type here..."
            className="specify-upload-textinput input"
          />
          <span className="specify-upload-text04">
            Describe the content of your material to generate interest
          </span>
          <textarea
            required="1"
            placeholder="Type here..."
            className="specify-upload-textarea textarea"
          ></textarea>
          <div className="specify-upload-container2">
            <div className="specify-upload-container3">
              <span className="specify-upload-text05">
                <span>What university? </span>
                <br></br>
              </span>
              <select disabled required className="specify-upload-select">
                <option value="UU" selected>
                  UU
                </option>
              </select>
            </div>
            <div className="specify-upload-container4">
              <span className="specify-upload-text08">
                For which course is the question?
              </span>
              <select required className="specify-upload-select1">
                <option value="-" selected>
                  -
                </option>
                <option value="Vak 1">Vak 1</option>
                <option value="Vak 2">Vak 2</option>
              </select>
            </div>
            <div className="specify-upload-container5">
              <span className="specify-upload-text09">
                What type of material is it?
              </span>
              <select required className="specify-upload-select2">
                <option value="-" selected>
                  -
                </option>
                <option value="Vak 1">Vak 1</option>
                <option value="Vak 2">Vak 2</option>
              </select>
            </div>
          </div>
          <span className="specify-upload-text10">
            <span>❗ By uploading this material you earn 1 token ❗</span>
            <br></br>
          </span>
          <Link to="/learn-download" className="specify-upload-navlink">
            <ButtonYellow
              button1="Submit"
              rootClassName="button-yellow-root-class-name3"
              className="specify-upload-component1"
            ></ButtonYellow>
          </Link>
        </form>
      </div>
      <SocialBar rootClassName="social-bar-root-class-name1"></SocialBar>
      <Footer rootClassName="footer-root-class-name11"></Footer>
    </div>
  )
}

export default SpecifyUpload
