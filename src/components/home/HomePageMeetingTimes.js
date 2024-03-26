import React from 'react';
import './HomePageMeetingTimes.css';

const HomePageMeetingTimes = (props) => {

  return (
    <div className="row">
      <div className="offset-md-2 col-md-8">
        <div className="home-page-meeting-times">
          <h2>Our Schedule</h2>
          <br />
          {/* <h3>We run a baby crèche and children's church during the morning service</h3> */}
          <p>Adult Bible Study: 9:00AM - 9:45AM</p>
          <p>Sunday School: 9:45AM - 10:45AM</p>
          <p>Refreshments: 10:45AM - 11:10AM</p>
          <p>Church Service: 11:15AM - 12:30PM</p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default HomePageMeetingTimes;