// VerifyEmailPage.js

import React from 'react';
import image2 from './images/download.png';
import { useLocation } from 'react-router-dom';


const VerifyEmailPage = () => {
  const location = useLocation();
  const selectedImage = location.state && location.state.selectedImage;
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-yellow-100 py-4 px-8 flex justify-between items-center">
        <div className="flex items-center">
          <img src={image2} alt="MGS Logo" className="h-20 mr-1" />
          <nav>
            <ul className="flex space-x-7">
              <li>
                <a href=" " className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  Inspiration
                </a>
              </li>
              <li>
                <a href=" " className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  Find Work
                </a>
              </li>
              <li>
                <a href=" " className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  Learn Design
                </a>
              </li>
              <li>
                <a href=" " className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  Go Pro
                </a>
              </li>
              <li>
                <a href=" " className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  Hire Designers
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 rounded-lg mr-4"
          />
          <div className="flex space-x-7">
            {selectedImage && <img src={selectedImage} alt="User Avatar" className="h-10 w-7em rounded-full" />}
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-3 rounded mr-4">
              Upload
            </button>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center mt-8">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto animate-fadeIn">
          <div className="flex items-center justify-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="5em" viewBox="0 0 48 48">
              <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                <path d="M36 15H44V28V41H4V28V15H12"/>
                <path d="M24 19V5"/>
                <path d="M30 13L24 19L18 13"/>
                <path d="M4 15L24 30L44 15"/>
              </g>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-center mb-4">Please verify your email...</h2>
          <p className="text-gray-600 mb-4 text-center">
            Please verify your email address. We've sent a confirmation email to:
          </p>
          <p className="text-gray-800 font-semibold mb-6 text-center">account@MGS.design</p>
          <p className="text-gray-600 mb-4 text-center">
            Click the confirmation link in that email to begin using MGS.
          </p>
          <p className="text-gray-600 mb-4 text-center">
            Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see
            it, you can <span className="text-pink-500 cursor-pointer">resend the confirmation email</span>.
          </p>
          <p className="text-gray-600 text-center">
            Wrong email address? <span className="text-pink-500 cursor-pointer">Change it</span>.
          </p>
        </div>
      </main>

      <footer className="bg-yellow-100 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">MGS</h3>
              <p className="text-gray-600 mb-4">
                MGS is the world's leading community for creatives to share, grow, and get hired.
              </p>
              <div className="flex space-x-6">
                <a href=" " className="text-gray-600 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="2em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M1 2h2.5L3.5 2h-2.5z"><animate fill="freeze" attributeName="d" dur="0.4s" values="M1 2h2.5L3.5 2h-2.5z;M1 2h2.5L18.5 22h-2.5z"/></path><path d="M5.5 2h2.5L7.2 2h-2.5z"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5.5 2h2.5L7.2 2h-2.5z;M5.5 2h2.5L23 22h-2.5z"/></path><path d="M3 2h5v0h-5z" opacity="0"><set attributeName="opacity" begin="0.4s" to="1"/><animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M3 2h5v0h-5z;M3 2h5v2h-5z"/></path><path d="M16 22h5v0h-5z" opacity="0"><set attributeName="opacity" begin="0.4s" to="1"/><animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M16 22h5v0h-5z;M16 22h5v-2h-5z"/></path><path d="M18.5 2h3.5L22 2h-3.5z" opacity="0"><set attributeName="opacity" begin="0.5s" to="1"/><animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"/></path></g></svg>
                </a>
                <a href=" " className="text-gray-600 hover:text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="2em" viewBox="0 0 256 258"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#1faf38"/><stop offset="100%" stop-color="#60d669"/></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#f9f9f9"/><stop offset="100%" stop-color="#fff"/></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"/><path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/></svg>
                </a>
                <a href=" " className="text-gray-600 hover:text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="2em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"/><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"/><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"/><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#fd5"/><stop offset=".1" stop-color="#fd5"/><stop offset=".5" stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771c8"/><stop offset=".128" stop-color="#3771c8"/><stop offset="1" stop-color="#60f" stop-opacity="0"/></radialGradient></defs></g></svg>
                </a>
                <a href=" " className="text-gray-600 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="2em" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">For designers</h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <a href=" " className="hover:text-gray-800">Browse design work</a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-800">Designers for hire</a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-800">Designer directory</a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-800">Jobs board</a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-800">Freelance projects</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Hire designers</h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <a href=" " className="hover:text-gray-800">Post a job opening</a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-800">Browse freelance experts</a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-800">Promote your project</a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-800">Discover worldwide talent</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <a href=" " className="hover:text-gray-800">About</a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-800">Contact</a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-800">Careers</a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-800">Press</a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-800">Our partners</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Directories</h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <a href=" " className="hover:text-gray-800">Designers</a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-800">Freelancers</a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-800">Teams</a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-800">Job openings</a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-800">Companies</a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-800">Trends</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VerifyEmailPage;
