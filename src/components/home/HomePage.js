import React from 'react';
import HomePageSlider from './HomePageSlider';
import HomePageIntro from './HomePageIntro';
import HomePageText from './HomePageText';
import HomePageMeetingTimes from './HomePageMeetingTimes';
import Map from '../map/Map';
import './HomePage.css'
import UpcomingEvents from './UpcomingEvents';

const eventsData = [
  {
    name: 'Easter Service',
    description: 'Join us for our special Easter service celebration.',
    time: 'April 9, 10:00 AM',
    place: 'Main Church Hall'
  },
  {
    name: 'Youth Fellowship',
    description: 'A gathering for the youth to study, worship, and have fun together.',
    time: 'April 15, 6:00 PM',
    place: 'Youth Center'
  },
  {
    name: 'Bible Study',
    description: 'Weekly Bible study group meeting.',
    time: 'Every Wednesday, 7:00 PM',
    place: 'Room 101'
  },
  // Add more events as needed
];


const HomePage = (props) => {
  return (
    <div className="home-page">
      <HomePageSlider/>
      <HomePageIntro/>
      <HomePageText/>
      <UpcomingEvents events={eventsData}/>
      <HomePageMeetingTimes/>
      <Map/>
    </div>
  )
}

export default HomePage;
