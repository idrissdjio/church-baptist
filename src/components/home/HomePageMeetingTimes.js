import React from 'react';
import './HomePageMeetingTimes.css';

const HomePageMeetingTimes = (props) => {
  return (
    <div className="row">
      <div className="offset-md-2 col-md-8">
        <div className="home-page-meeting-times">
          <h2>Weekly Schedule</h2>
          <br />
          <h3>SUNDAY</h3>
          <p>Adult Bible Study: 9:00AM - 9:45AM</p>
          <p>Sunday School (Children/ College& Career/ Adult): 9:45AM - 10:45AM</p>
          <p>Coffee & Donuts: 10:45AM - 11:10AM</p>
          <p>Church Service: 11:15AM - 12:30PM</p>
          <p>Pot Luck Lunch: 12:30PM - 1:30PM</p>
          <p>Spanish Class: 1:45PM - 3:30PM</p>
          <br />
          <h3>TUESDAY</h3>
          <p>Ladies Bible Study: 7:00PM - 8:30PM</p>
          <p>UWM Bible Study: 7:00PM - 8:30PM</p>
          <br />
          <h3>WEDNESDAY</h3>
          <p>Bible/Prayer: 7:00PM - 8:30PM</p>
          <br />
          <h3>FRIDAY</h3>
          <p>Bible Program: 7:00PM - 9:00PM</p>
          <div className="radio-study-info">
            <p>WVCY RADIO BIBLE STUDY<br />9AM every SUNDAY 107.7 FM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageMeetingTimes;
