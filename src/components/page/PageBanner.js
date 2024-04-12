import React from 'react';
import {Helmet} from 'react-helmet';
import './PageBanner.css'

const PageBanner = (props) => {

  let style = {
    background:"url("+props.imageUrl+")",
    color:props.titleColour
  }

  if (props.backgroundColor) {
    style = {
      background: props.backgroundColor,
      color: props.titleColour
    }
  }

  var className = "page-banner-mobile-center";

  if(props.bannerMobilePosition === "right") {
    className = "page-banner-mobile-right"
  }

  return (
    <div className={"page-banner "+className} style={style}>
      <Helmet>
      </Helmet>
      <div className="row">
        <div className="col align-self-center">
          <h1 className='title'>{props.title}</h1>
        </div>
      </div>
    </div>
  )
}

export default PageBanner;
