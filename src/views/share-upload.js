import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Explanation from '../components/explanation'
import Footer from '../components/footer'
import './share-upload.css'

const ShareUpload = (props) => {
  return (
    <div className="share-upload-container">
      <Helmet>
        <title>ShareUpload - Introductieproject15</title>
        <meta
          property="og:title"
          content="ShareUpload - Introductieproject15"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name7"></Header>
      <div className="share-upload-upload">
        <div className="share-upload-container1">
          <h1 className="share-upload-text">Upload your files to the Vault</h1>
          <form
            id="file-upload-form"
            enctype="multipart/form-data"
            className="share-upload-form"
          >
            <input
              type="file"
              id="file-input"
              className="share-upload-textinput"
            />
            <span>
              <span>Choose files or drag and drop </span>
              <br></br>
            </span>
            <input
              type="submit"
              id="signUp"
              value="Upload Files"
              placeholder="Upload Files"
              className="share-upload-textinput1 Button"
            />
          </form>
        </div>
      </div>
      <div className="share-upload-feature-card">
        <h1 className="share-upload-text4">WHY?</h1>
        <Explanation></Explanation>
      </div>
      <Footer rootClassName="footer-root-class-name7"></Footer>
    </div>
  )
}

export default ShareUpload
