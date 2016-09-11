import React from 'react';
import TopMenuItem from './TopMenuItem/TopMenuItem';
import SocialLinkItem from './SocialLinkItem/SocialLinkItem';

require('normalize.css/normalize.css');
require('styles/App.css');
const topImage = require('../images/cpslab-top.jpg');
const logoImage = require('../images/logo.png');
const subTitleImage = require('../images/seisyun.png');

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
          <div id="top_log">
            <h1>
              <img id="logo" src={logoImage} alt=""/>
            </h1>
          </div>
          <ul id="links">
            <SocialLinkItem href={"http://www.cps.im.dendai.ac.jp/"} name={"home"} />
            <SocialLinkItem href={"https://twitter.com/masaiwai"} name={"tw"} />
            <SocialLinkItem href={"https://github.com/cpslab"} name={"gh"} />
            <SocialLinkItem href={"https://www.facebook.com/groups/799685203451637/"} name={"fb"} />
          </ul>
        </header>
        <div id="container">
          <div id="left">
            <ul id="menu">
              <TopMenuItem href={'/news'} label="NEWS"/>
              <TopMenuItem href={'/about'} label="ABOUT"/>
              <TopMenuItem href={'/works'} label="WORKS"/>
              {/*<TopMenuItem href={'/skills'} label="SKILLS" />*/}
              {/*<TopMenuItem href={'/members'} label="MEMBERS" />*/}
              {/*<TopMenuItem href={'/systems'} label="SYSTEMS" />*/}
            </ul>
          </div>
          <div id="center">
            <img src={topImage} alt="cps camp image" />
          </div>
          <div id="right">
            <img src={subTitleImage} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
