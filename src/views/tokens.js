import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FreePlan from '../components/free-plan'
import BoosterPlan from '../components/booster-plan'
import Footer from '../components/footer'
import './tokens.css'

const Tokens = (props) => {
  return (
    <div className="tokens-container">
      <Helmet>
        <title>Tokens - Introductieproject15</title>
        <meta property="og:title" content="Tokens - Introductieproject15" />
      </Helmet>
      <Header rootClassName="header-root-class-name4"></Header>
      <div className="tokens-pricing">
        <div className="tokens-container1">
          <div className="tokens-card">
            <div className="tokens-container2">
              <span className="tokens-text">TOKENS</span>
              <span className="tokens-text01">3</span>
              <span className="tokens-text02">Spent</span>
            </div>
            <span className="tokens-text03">
              <span className="tokens-text04">
                <span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    lorem lorem, malesuada in metus vitae, scelerisque accumsan
                    ipsum.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span></span>
            </span>
            <button className="tokens-button button Button">Learn More</button>
          </div>
          <div className="tokens-card1">
            <div className="tokens-container3">
              <span className="tokens-text12">TOKENS</span>
              <span className="tokens-text13">16</span>
              <span className="tokens-text14">Earned</span>
            </div>
            <span className="tokens-text15">
              <span className="tokens-text16">
                <span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    lorem lorem, malesuada in metus vitae, scelerisque accumsan
                    ipsum.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span></span>
            </span>
            <button className="tokens-button1 Button button">Learn More</button>
          </div>
          <div className="tokens-card2">
            <div className="tokens-container4">
              <span className="tokens-text24">TOKENS</span>
              <span className="tokens-text25">13</span>
              <span className="tokens-text26">Balance</span>
            </div>
            <span className="tokens-text27">
              <span className="tokens-text28">
                <span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    lorem lorem, malesuada in metus vitae, scelerisque accumsan
                    ipsum.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span></span>
            </span>
            <button className="tokens-button2 Button button">Learn More</button>
          </div>
        </div>
      </div>
      <div className="tokens-pricing1">
        <div className="tokens-container5">
          <div className="tokens-container6">
            <h1 className="tokens-text36">Pricing Plans</h1>
            <span className="tokens-text37">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  lorem lorem, malesuada in metus vitae, scelerisque accumsan
                  ipsum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </div>
          <div className="tokens-container7">
            <FreePlan></FreePlan>
            <BoosterPlan></BoosterPlan>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default Tokens
