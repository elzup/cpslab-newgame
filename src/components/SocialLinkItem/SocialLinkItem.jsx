import React from 'react';
require('./SocialLinkItem.css');

const SocialLinkItem = ({name, href}) => {
  const bgLeftPos = {
    'tw': '0px',
    'gh': '-100px',
    'fb': '-50px',
    'home': '-150px'
  }[name];
  const cssBg = {
    "background-position": bgLeftPos
  };
  return (
    <li className="item" style={cssBg} onClick={e => {
      window.open(href, '_blacnk')
    }
    }>
    </li>
  );
};

SocialLinkItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired
};

export default SocialLinkItem;
