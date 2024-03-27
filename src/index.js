import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SBC from './components/sbc/SBC';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import LivePage from './components/live/LivePage';
import SermonsPage from './components/sermons/SermonsPage';
import SermonSeriesPage from './components/sermons/SermonSeriesPage';
import SermonPage from './components/sermons/SermonPage';
import ContactPage from './components/contact/ContactPage';
import MembersPage from './components/members/MembersPage';
import Auth from './components/auth/Auth';
import Callback from './components/auth/Callback';
import GivingPage from './components/giving/GivingPage';
import WordForTheWeekPage from './components/word-for-the-week/WordForTheWeekPage';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

const PrivateRoute = ({ children }) => {
  const isAuthenticated = auth.isAuthenticated();
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

const Index = () => (
  <BrowserRouter>
    <SBC>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />}>
          <Route index element={<AboutPage />} />
          <Route path="history" element={<AboutPage />} />
          <Route path="what-we-believe" element={<AboutPage />} />
          <Route path="whats-on" element={<AboutPage />} />
        </Route>
        <Route path="/live" element={<LivePage />} />
        <Route path="/sermons" element={<SermonsPage />} />
        <Route path="/sermons/series/:title" element={<SermonSeriesPage />} />
        <Route path="/sermon/:sermonId/:title" element={<SermonPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/giving" element={<GivingPage />} />
        <Route path="/word-for-the-way" element={<WordForTheWeekPage />}>
          <Route index element={<WordForTheWeekPage />} />
          <Route path="the-comforting-care-of-god" element={<WordForTheWeekPage />} />
          <Route path="where-is-god" element={<WordForTheWeekPage />} />
          <Route path="our-burden-bearer" element={<WordForTheWeekPage />} />
        </Route>
        <Route path="/members" element={<PrivateRoute><MembersPage /></PrivateRoute>} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </SBC>
  </BrowserRouter>
);

ReactDOM.render(<Index />, document.getElementById('root'));
