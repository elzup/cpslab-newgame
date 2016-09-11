import React from 'react';
import TopMenuItem from './top-menu-item/TopMenuItem';

require('normalize.css/normalize.css');
require('styles/App.css');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index" id="content">
        <header id="top_header">
          <div id="top_announce">
            <p>2016年9月より</p>
            <p>1号館11階07b教室にて</p>
            <p>研究生募集開始!</p>
          </div>
          <div id="eyecatch">
            <h1>IWI LABO!</h1>
          </div>
          <ul id="links">
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Github</li>
            <li>Homepage</li>
          </ul>
        </header>
        <div id="container">
          <ul id="menu">
            <TopMenuItem href={'/news'} label="NEWS" />
            <TopMenuItem href={'/about'} label="ABOUT" />
            <TopMenuItem href={'/works'} label="WORKS" />
            {/*<TopMenuItem href={'/skills'} label="SKILLS" />*/}
            {/*<TopMenuItem href={'/members'} label="MEMBERS" />*/}
            {/*<TopMenuItem href={'/systems'} label="SYSTEMS" />*/}
          </ul>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
