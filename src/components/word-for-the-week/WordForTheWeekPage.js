import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import PageSidebar from '../page/PageSidebar';
import PageSection from '../page/PageSection';
import OurBurdenBearer from './OurBurdenBearer';
import WhereIsGod from './WhereIsGod';
import TheComfortingCareOfGod from './TheComfortingCareOfGod';
import './WordForTheWeek.css'
import './SermonsPage'
import SermonsPage from './SermonsPage';
import LivePage from './LivePage';

class WordForTheWeekPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSectionChange = (bannerImage, title, bannerMobilePosition) => {
    this.setState({
      currentBannerImage: bannerImage,
      title:title,
      bannerMobilePosition:bannerMobilePosition
    })
  }

  render() {
    return (
      <Page>
        <PageBanner title={this.state.title} imageUrl={this.state.currentBannerImage} bannerMobilePosition={this.state.bannerMobilePosition} titleColour="white"/>
        <PageSidebar onSectionChange={this.handleSectionChange} currentSection={this.state.currentSection}>
          <PageSection
            linkTitle="Radio Program"
            bannerImageUrl="/img/image.png"
            url="/word-for-the-way/"
            bannerMobilePosition="center">
            <SermonsPage/>
          </PageSection>

          <PageSection
            linkTitle="Streaming Online"
            bannerImageUrl="/img/word-for-the-week/where.jpg"
            url="/word-for-the-way/where-is-god"
            bannerMobilePosition="center">
            <LivePage/>
          </PageSection>

          <PageSection
            linkTitle="Previous Messages"
            bannerImageUrl="/img/word-for-the-week/burden.jpg"
            url="/word-for-the-way/our-burden-bearer"
            bannerMobilePosition="center">
            <OurBurdenBearer/>
          </PageSection>

        </PageSidebar>
      </Page>
    )
  }

}

export default WordForTheWeekPage;
