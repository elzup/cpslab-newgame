import React from 'react';
require('./TopMenuItem.css');

const TopMenuItem = ({label, href}) => (
  <li className="menuItem">
    <a href={href}>{label}</a>
  </li>
);

TopMenuItem.propTypes = {
  label: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired
};

export default TopMenuItem;
