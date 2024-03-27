import React, { useState } from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import PageSidebar from '../page/PageSidebar';
import PageSection from '../page/PageSection';
import WelcomeSection from './WelcomeSection';
import HistorySection from './HistorySection';
import HistorySectionMore from './HistorySectionMore';
import WhatWeBelieveSection from './WhatWeBelieveSection';
import WhatWeBelieveSectionMore from './WhatWeBelieveSectionMore';
import WhatsOnSection from './WhatsOnSection';
import './AboutPage.css';

const AboutPage = () => {
  const [currentBannerImage, setCurrentBannerImage] = useState('');
  const [title, setTitle] = useState('');
  const [bannerMobilePosition, setBannerMobilePosition] = useState('');
  const [currentSection, setCurrentSection] = useState('');

  const handleSectionChange = (bannerImage, title, bannerMobilePosition) => {
    setCurrentBannerImage(bannerImage);
    setTitle(title);
    setBannerMobilePosition(bannerMobilePosition);
  };

  return (
    <Page>
      <PageBanner
        title={title}
        imageUrl={currentBannerImage}
        bannerMobilePosition={bannerMobilePosition}
        titleColour="white"
      />
      <PageSidebar onSectionChange={handleSectionChange} currentSection={currentSection}>

        <PageSection
          linkTitle="About Us"
          bannerImageUrl="/img/about.png"
          url="/about"
          bannerMobilePosition="right"
        >
          <WelcomeSection />
        </PageSection>

        <PageSection
          linkTitle="Message From Pastor"
          bannerTitle=" "
          bannerImageUrl="/img/pastor.png"
          url="/about/history/"
          bannerMobilePosition="right"
        >
          <HistorySection />
          {/* <HistorySectionMore /> */}
        </PageSection>

        <PageSection
          linkTitle="Sunday Schedule"
          bannerTitle=" "
          bannerImageUrl="/img/schedule.png"
          url="/about/what-we-believe"
          bannerMobilePosition="center"
        >
          <WhatWeBelieveSection />
          {/* <WhatWeBelieveSectionMore /> */}
        </PageSection>

        <PageSection
          linkTitle="Weekly Services"
          bannerTitle=" "
          bannerImageUrl="/img/weekly.png"
          url="/about/whats-on"
          bannerMobilePosition="center"
        >
          <WhatsOnSection />
        </PageSection>

      </PageSidebar>
    </Page>
  );
};

export default AboutPage;

