import React from 'react';
const style = require('./TopMenuItem.css');

const TopMenuItem = ({label, href}) => {

  return (
    <li className={"menuItem " + label.toLowerCase()}>
      <a href={href}>{label}</a>
    </li>
  )
};

TopMenuItem.propTypes = {
  label: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired
};

export default TopMenuItem;
