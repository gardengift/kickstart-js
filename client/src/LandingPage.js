import React, { Component } from 'react';

import logo from './logo.png';

class LandingPage extends Component {

  render() {
    return (
      <div className="landingPage">
        <div className="landingPageTitle">
          Genrosidad de Jardin
        </div>
        <div className="landingPageTitleEnglish">
        GardenGift
        </div>
        <div className="landingPageLogoContainer">
          <img className="landingPageLogo"
            src={logo}
            alt="new"
          />

        </div>
      </div>
    );
  }
}

export default LandingPage;
