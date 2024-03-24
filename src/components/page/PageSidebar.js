import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './PageSidebar.css';

function PageSidebar(props) {
  const location = useLocation();
  const navigate = useNavigate();

  // Define getCurrentSection before using it in the useState hook
  const getCurrentSection = (children) => {
    let currentSection = 0;
    for (let i = 0; i < children.length; i++) {
      if (location.pathname === children[i].props.url) {
        currentSection = i;
        break;
      }
    }
    return currentSection;
  };

  const [currentSection, setCurrentSection] = useState(() => getCurrentSection(props.children));
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const newSection = props.children[currentSection];
    const title = getTitle(newSection);
    const bannerImageUrl = newSection.props.bannerImageUrl;
    const bannerMobilePosition = newSection.props.bannerMobilePosition;
    props.onSectionChange(bannerImageUrl, title.toUpperCase(), bannerMobilePosition);
  }, [currentSection, props]);

  const sectionLinkClicked = (index) => {
    const newSection = props.children[index];
    changeSection(newSection, index);
  };

  const changeSection = (newSection, index) => {
    const title = getTitle(newSection);
    const bannerImageUrl = newSection.props.bannerImageUrl;
    const bannerMobilePosition = newSection.props.bannerMobilePosition;

    navigate(newSection.props.url);
    props.onSectionChange(bannerImageUrl, title.toUpperCase(), bannerMobilePosition);
    setCurrentSection(index);
    setCollapsed(true);
  };

  const getTitle = (section) => {
    return section.props.bannerTitle || section.props.linkTitle;
  };

  const toggleMobileMenu = () => {
    setCollapsed(!collapsed);
  };

  const renderMobileMenu = (links) => {
    const buttonContents = collapsed ? "+" : "-";

    const toggleButton = (
      <button className="btn btn-link btn-page-sidebar-link btn-page-sidebar-mobile-toggle" onClick={toggleMobileMenu}>{buttonContents}</button>
    );

    const menuClass = "col-md-3 d-lg-none d-xl-none page-sidebar-wrapper-mobile";

    if (collapsed) {
      return (
        <div className={menuClass}>
          <div className="row">
            <div className="offset-10 col-2">
              {toggleButton}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={menuClass}>
          <div className="row">
            <div className="col-10">
              <ul className="page-sidebar-menu-list">
                {links}
              </ul>
            </div>
            <div className="col-2">
              {toggleButton}
            </div>
          </div>
        </div>
      );
    }
  };

  const links = props.children.map((section, index) => {
    const classes = currentSection === index ? "btn-page-sidebar-link-active" : "";

    return (
      <li key={index}>
        <button className={`btn btn-link btn-page-sidebar-link ${classes}`} onClick={() => sectionLinkClicked(index)} data-index={index}>
          {section.props.linkTitle}
        </button>
      </li>
    );
  });

  const mobileMenu = renderMobileMenu(links);

  return (
    <div className="page-sidebar-wrapper">
      <div className="row">
        <div className="col-md-3 d-none d-sm-none d-md-none d-lg-block">
          <ul className="page-sidebar-menu-list">
            {links}
          </ul>
        </div>
        {mobileMenu}
        <div className="col-md-9 page-sidebar-section">
          {props.children[currentSection]}
        </div>
      </div>
    </div>
  );
}

export default PageSidebar;
