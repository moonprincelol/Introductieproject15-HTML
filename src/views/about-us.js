import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SocialBar from '../components/social-bar'
import UniqueFeature from '../components/unique-feature'
import TeamMember from '../components/team-member'
import Footer from '../components/footer'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>About-us - Introductieproject15</title>
        <meta property="og:title" content="About-us - Introductieproject15" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="about-us-steps">
        <h1 className="about-us-text">Discover Our Format</h1>
        <span className="about-us-text01">
          <span>
            We aim to make your studying more efficient, we do this with four
            steps.
          </span>
          <br></br>
        </span>
        <div className="about-us-container01">
          <div className="about-us-step">
            <div className="about-us-container02">
              <div className="about-us-line"></div>
              <div className="about-us-container03">
                <svg viewBox="0 0 1024 1024" className="about-us-icon">
                  <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                </svg>
              </div>
              <div className="about-us-line1"></div>
            </div>
            <div className="about-us-container04">
              <h1 className="about-us-text04">Create</h1>
              <span className="about-us-text05">
                <span>
                  Create summaries and study notes for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>different courses.</span>
              </span>
            </div>
          </div>
          <div className="about-us-step1">
            <div className="about-us-container05">
              <div className="about-us-line2"></div>
              <div className="about-us-container06">
                <svg viewBox="0 0 1024 1024" className="about-us-icon2">
                  <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                </svg>
              </div>
              <div className="about-us-line3"></div>
            </div>
            <div className="about-us-container07">
              <h1 className="about-us-text09">Share</h1>
              <span className="about-us-text10">
                <span>
                  Share these summaries and study notes on
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  our website
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>and earn coins</span>
              </span>
            </div>
          </div>
          <div className="about-us-step2">
            <div className="about-us-container08">
              <div className="about-us-line4"></div>
              <div className="about-us-container09">
                <svg viewBox="0 0 1024 1024" className="about-us-icon4">
                  <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                  <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                </svg>
              </div>
              <div className="about-us-line5"></div>
            </div>
            <div className="about-us-container10">
              <h1 className="about-us-text15">Learn</h1>
              <span className="about-us-text16">
                <span>
                  Download other summaries and
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>ask question</span>
              </span>
            </div>
          </div>
          <div className="about-us-step3">
            <div className="about-us-container11">
              <div className="about-us-line6"></div>
              <div className="about-us-container12">
                <svg viewBox="0 0 1024 1024" className="about-us-icon7">
                  <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                </svg>
              </div>
              <div className="about-us-line7"></div>
            </div>
            <div className="about-us-container13">
              <h1 className="about-us-text19">Results</h1>
              <span className="about-us-text20">
                See immediate results in your grades
              </span>
            </div>
          </div>
        </div>
      </div>
      <SocialBar></SocialBar>
      <div className="about-us-features">
        <div className="about-us-container14">
          <h1 className="about-us-text21">
            <span>Our </span>
            <span>
              unique
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>features</span>
          </h1>
          <div className="about-us-separator"></div>
          <div className="about-us-container15">
            <div className="about-us-container16">
              <UniqueFeature
                title="Free!"
                description="Our website is totally free to use. This means no ads! You earn coins by uploading documents and spend them by downloadig them."
                rootClassName="rootClassName1"
              ></UniqueFeature>
              <UniqueFeature
                title="Question Board"
                description="Our website has a question board where you can ask and answer questions."
                rootClassName="rootClassName4"
              ></UniqueFeature>
              <UniqueFeature
                title="Tokens"
                description="By using tokens we encourage everyone to share their own documents."
                rootClassName="rootClassName3"
              ></UniqueFeature>
              <UniqueFeature rootClassName="rootClassName2"></UniqueFeature>
            </div>
            <img
              alt="An image of a notebook, coffee, earplugs and a keyboard"
              src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fHN0dWR5aW5nfGVufDB8fHx8MTY4NDU4MzQwM3ww&amp;ixlib=rb-4.0.3&amp;w=500"
              className="about-us-image"
            />
          </div>
        </div>
      </div>
      <div className="about-us-features1">
        <h1 className="about-us-text26">What does our team look like?</h1>
        <div className="about-us-container17">
          <TeamMember
            title="Olivier"
            image_alt="Photo of Olivier"
            image_src="/Photo's Team/oli4-200h.jpg"
            rootClassName="rootClassName"
          ></TeamMember>
          <TeamMember
            title="Jesse"
            image_alt="Photo of Jesse"
            image_src="/Photo's Team/thijs-200w.jpg"
            rootClassName="rootClassName1"
          ></TeamMember>
          <TeamMember
            title="Mark"
            image_alt="Photo of Mark"
            rootClassName="rootClassName2"
          ></TeamMember>
          <TeamMember
            title="Wahib"
            image_alt="Photo of Wahib"
            rootClassName="rootClassName3"
          ></TeamMember>
          <TeamMember
            title="Bart"
            image_alt="Photo of Bart"
            rootClassName="rootClassName7"
          ></TeamMember>
          <TeamMember
            title="Daniel"
            image_alt="Photo of Daniel"
            rootClassName="rootClassName6"
          ></TeamMember>
          <TeamMember
            title="Patrick"
            image_alt="Photo of Patrick"
            rootClassName="rootClassName5"
          ></TeamMember>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default AboutUs
