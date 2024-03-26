import React from 'react';
import './HomePageText.css';

const HomePageText = (props) => {

  return (
    <div className="row">
      <div className="col-md homepage-text about">
      <h3>Welcome</h3>
        <hr />
        <p>We would love to welcome you to the East Side Baptist Church! We are located in the heart of East Side near the lake; <a href="your-directions-link">click here</a> for directions.</p>
        <p>We are an Independent Bible believing Baptist Church with a love for people. We believe the Bible is our authority, not tradition or man's teaching.</p>
        <p>We have classes for all ages, and a nursery for the young ones. We have transportation available to go out and pick children and adults up for church. If you need a ride, just give us a call, we'd love to have you visit. We're out obeying the Lord's Great Commission every Saturday and Monday knocking on doors inviting folks to church and sharing the Gospel to anyone that will listen.</p>
      </div>
      <div className="col-md homepage-text vision">
      <h3>Our Mission</h3>
        <hr />
        <p>Our mission at East Side Baptist Church is to fulfill the great commission that Jesus gave us, to reach everyone we can with the Gospel of Christ. We try to accomplish this by going soul winning on Saturday mornings and Monday evenings every week, trying to be a testimony to those we come in contact with every day, and through supporting missions.</p>
        <p>Some of the things we’d like to start in the near future include a Bible trade school, Christian school, Christian daycare center, and housing for the addicted in our Reformers Unanimous program. In God’s time and if He wills, we’d like to start some of these ministries.</p>
      </div>
    </div>
  );
}

export default HomePageText;
