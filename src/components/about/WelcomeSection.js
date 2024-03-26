import React from 'react';
import './WelcomeSection.css'; // Ensure this CSS file is imported for styling

const WelcomeSection = (props) => {
  return (
    <div className="welcome-section">
      <h2 className="welcome-title">Welcome to East Side Baptist Church</h2>
      <p className="welcome-text">
        East Side Baptist Church embarked on its journey when Pastor Methum, guided by a strong calling after his tenure at Grandview Park Baptist Church in Des Moines, Iowa, decided to establish a church in a major urban setting. Graduating with a B.A. in Pastoral Theology from Faith Baptist Bible College, Pastor Methum, along with his wife Traecey and their four children, Jacob, Jerub, Racheleah, and Rebekah, relocated to Milwaukee, Wisconsin, heeding God's direction. The Methum family initially made their home in Milwaukee, living in a modest two-bedroom apartment and initiating church services in a storefront at 2525 W. National Avenue, marking the nascent stage of the church's presence in the city.
      </p>
    </div>
  );
}

export default WelcomeSection;
