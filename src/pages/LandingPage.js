import React from 'react';

const LandingPage = () => { 
  <div>
    <Nav />
    <div className="intro-wrapper">
      <div className="intro-name">
        Howdy, call me Matt!
      </div>
      <div className="tagline">
        Mathematics Educator | Aspiring Full-Stack Dev | Content Creator
      </div>
      <SocialIcons />
    </div>
    <ScrollToNext pageSelector=".about-page" />
  </div>
}

export default LandingPage;