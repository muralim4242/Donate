import React, { Component } from 'react';
import '../../styles/index.css';
import FooterDescribe from './FooterDescribe.js';
import FooterSubscribe from './FooterSubscribe.js';
import FooterSocial from './FooterSocial.js';
import FooterExplore from './FooterExplore.js';

class Footer extends Component {
  render() {
    return (
      <div>
       <footer className="footer-bs">
       <FooterDescribe/>
       <FooterSubscribe/>
       <FooterExplore/>
       <FooterSocial/>
  </footer>

  </div>

    );
  }
}
export default Footer;
