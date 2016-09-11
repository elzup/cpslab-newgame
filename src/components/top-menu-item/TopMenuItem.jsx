import React from 'react';

const TopMenuItem = ({label, href}) => (
  <li>
    <a href={href}>{label}</a>
  </li>
);

TopMenuItem.propTypes = {
  label: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired
};

export default TopMenuItem;
