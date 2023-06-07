import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SearchFilters from '../components/search-filters'
import SortAmount from '../components/sort-amount'
import MaterialPost from '../components/material-post'
import PageSwitching from '../components/page-switching'
import Footer from '../components/footer'
import './learn-download.css'

const LearnDownload = (props) => {
  return (
    <div className="learn-download-container">
      <Helmet>
        <title>LearnDownload - Introductieproject15</title>
        <meta
          property="og:title"
          content="LearnDownload - Introductieproject15"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name8"></Header>
      <SearchFilters></SearchFilters>
      <div className="learn-download-blog">
        <form id="filterForm" className="learn-download-filter-form">
          <SortAmount rootClassName="sort-amount-root-class-name1"></SortAmount>
        </form>
        <div className="learn-download-container1">
          <MaterialPost rootClassName="material-post-root-class-name"></MaterialPost>
        </div>
        <div className="learn-download-container2">
          <MaterialPost rootClassName="material-post-root-class-name1"></MaterialPost>
        </div>
        <PageSwitching></PageSwitching>
      </div>
      <Footer rootClassName="footer-root-class-name8"></Footer>
    </div>
  )
}

export default LearnDownload
