import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import LearnDownload from './views/learn-download'
import Tokens from './views/tokens'
import AboutUs from './views/about-us'
import Account from './views/account'
import SpecifyUpload from './views/specify-upload'
import StudyTips from './views/study-tips'
import Ask from './views/ask'
import ShareUpload from './views/share-upload'
import REGISTER from './views/register'
import LOGIN from './views/login'
import QuestionPage from './views/question-page'
import MaterialPage from './views/material-page'
import Home from './views/home'
import QuestionBoard from './views/question-board'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={LearnDownload} exact path="/learn-download" />
        <Route component={Tokens} exact path="/tokens" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={Account} exact path="/account" />
        <Route component={SpecifyUpload} exact path="/specify-upload" />
        <Route component={StudyTips} exact path="/study-tips" />
        <Route component={Ask} exact path="/ask" />
        <Route component={ShareUpload} exact path="/share-upload" />
        <Route component={REGISTER} exact path="/register" />
        <Route component={LOGIN} exact path="/login" />
        <Route component={QuestionPage} exact path="/question-page" />
        <Route component={MaterialPage} exact path="/material-page" />
        <Route component={Home} exact path="/" />
        <Route component={QuestionBoard} exact path="/question-board" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
