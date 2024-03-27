import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import './GivingPage.css'

class GivingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Page>
        <PageBanner imageUrl="/img/giving.jpeg" titleColour="white" title="GIVING"/>
        <div className="ml-3 mr-3 pt-4 pb-4">
          <p>Waitaing for Hans with Payment Integration</p>
        </div>
      </Page>
    )
  }

}

export default GivingPage;
