import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import './GivingPage.css'
import Donate from './Donate';

class GivingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Page>
        <PageBanner imageUrl="/img/image.png" titleColour="white" title=" "/>
        <div className="ml-3 mr-3 pt-4 pb-4">
          <Donate/>
        </div>
      </Page>
    )
  }

}

export default GivingPage;
