import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ButtonLightBlue from '../components/button-light-blue'
import ButtonDarkBlue from '../components/button-dark-blue'
import ButtonYellow1 from '../components/button-yellow1'
import StudentQuote1 from '../components/student-quote-1'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Introductieproject15</title>
        <meta property="og:title" content="Introductieproject15" />
      </Helmet>
      <Header></Header>
      <div className="home-content">
        <div className="home-learn-to-keep-it-simple">
          <span className="home-text">Create, Share, Learn</span>
          <div className="home-upload-download">
            <Link to="/share-upload" className="home-navlink">
              <ButtonLightBlue className="home-component1"></ButtonLightBlue>
            </Link>
            <span className="home-text01">OR</span>
            <Link to="/learn-download" className="home-navlink1">
              <ButtonDarkBlue
                button="Learn"
                rootClassName="button-dark-blue-root-class-name2"
                className="home-component2"
              ></ButtonDarkBlue>
            </Link>
          </div>
          <h1 className="home-text02">
            <span>
              Find the
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text04">study material</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text06">YOU</span>
            <span> need</span>
          </h1>
          <span className="home-text08 Content">
            Our database is constantly updated with new material tailored to
            your needs!
          </span>
          <div className="home-choice">
            <div className="home-search-bar">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"></path>
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="home-input input"
              />
            </div>
            <Link to="/learn-download" className="home-navlink2">
              <ButtonYellow1
                button1="enter"
                rootClassName="button-yellow1-root-class-name1"
                className="home-component3"
              ></ButtonYellow1>
            </Link>
          </div>
        </div>
        <div className="home-stats">
          <div className="home-stat">
            <svg viewBox="0 0 1152 1024" className="home-icon2">
              <path d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              <path d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"></path>
            </svg>
            <span className="home-text09">Students</span>
            <h1 className="home-text10">50.000+</h1>
            <span className="home-text11">are using our platform</span>
          </div>
          <div className="home-stat1">
            <svg viewBox="0 0 1024 1024" className="home-icon5">
              <path d="M598 512h234l-234-234v234zM640 214l256 256v426q0 34-26 60t-60 26h-470q-34 0-59-26t-25-60v-598q0-34 26-59t60-25h298zM682 42v86h-512v598h-84v-598q0-34 25-60t59-26h512z"></path>
            </svg>
            <span className="home-text12">Documents</span>
            <h1 className="home-text13">100.000+</h1>
            <span className="home-text14">ARE on our platform</span>
          </div>
        </div>
        <div className="home-testimonial">
          <div className="home-container1">
            <h1 className="home-text15">
              <span>They love it!</span>
              <br></br>
            </h1>
            <span className="home-text18">
              We received positive feedback from people who love our platform!
              Check out some of their comments below. 
            </span>
            <div className="home-container2">
              <StudentQuote1
                name="Arnoud de Vries"
                role="Professor and lecturer"
                quote="StudyVault empowers me as a lecturer to provide study material for my fellow students. I value this platform for its comprehensive resources and study material."
                picture_src="/User Profile Pictures/arnouddevries-200h.png"
                rootClassName="rootClassName2"
              ></StudentQuote1>
              <StudentQuote1
                name="Bart Florijn"
                role="moderator"
                quote="Moderating at StudyVault makes me enthousiastic about helping students improve and providing a positive atmosphere. I derive great pleasure from seeing happy people using our site!"
                picture_src="/User Profile Pictures/bartflorijn-200h.png"
                rootClassName="rootClassName"
              ></StudentQuote1>
              <StudentQuote1
                name="Leontine de Boer"
                quote="Using the StudyVault platform has helped me through a lot of stress. I love to help other students who have the same problems as I did in my early years!"
                picture_src="/User Profile Pictures/leontinedeboer-200h.png"
                rootClassName="rootClassName1"
              ></StudentQuote1>
            </div>
          </div>
        </div>
        <div className="home-newspaper">
          <div className="home-container3">
            <h1 className="home-text19">
              <span>Be the first to get the latest features</span>
            </h1>
            <span className="home-text21">
              By signing up for our newsletter you will be kept up to date on
              everything that is happing on the website. When new features are
              added, the best summaries of that week and much more. Sign up now!
            </span>
            <div className="home-container4">
              <input
                type="text"
                placeholder="Enter email here..."
                autoComplete="email"
                className="home-textinput input"
              />
              <ButtonYellow1
                rootClassName="button-yellow1-root-class-name2"
                className="home-component7 Button"
              ></ButtonYellow1>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGJvb2tzfGVufDB8fHx8MTY4NDQ0MjA4OXww&amp;ixlib=rb-4.0.3&amp;w=300"
            className="home-image"
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
