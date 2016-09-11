import React from 'react';
const style = require('./TopMenuItem.css');

const TopMenuItem = ({label, href, targetBlank}) => {

  const options = {};
  if (targetBlank) {
    options.target = '_blank'
  }
  return (
    <li className={"menuItem " + label.toLowerCase()}>
      <a href={href} {...options} >{label}</a>
    </li>
  )
};

TopMenuItem.propTypes = {
  label: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired,
  targetBlank: React.PropTypes.bool
};

TopMenuItem.defaultProps = {
  targetBlank: false
};

export default TopMenuItem;
