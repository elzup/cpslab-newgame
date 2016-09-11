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
      <div className="index" id="wrapper">
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
            <SocialLinkItem href={"http://www.cps.im.dendai.ac.jp/"}
                            name={"home"}/>
            <SocialLinkItem href={"https://twitter.com/masaiwai"} name={"tw"}/>
            <SocialLinkItem href={"https://github.com/cpslab"} name={"gh"}/>
            <SocialLinkItem
              href={"https://www.facebook.com/groups/799685203451637/"}
              name={"fb"}/>
          </ul>
        </header>
        <div id="container">
          <div id="left">
            <ul id="menu">
              <TopMenuItem
                href={'http://newgame-anime.com/'}
                label="NEWGAME"
                targetBlank={true}
              />
              <TopMenuItem href={'/#about'} label="ABOUT"/>
              <TopMenuItem href={'/#works'} label="WORKS"/>
              {/*<TopMenuItem href={'/skills'} label="SKILLS" />*/}
              {/*<TopMenuItem href={'/members'} label="MEMBERS" />*/}
              {/*<TopMenuItem href={'/systems'} label="SYSTEMS" />*/}
            </ul>
          </div>
          <div id="center">
            <img src={topImage} alt="cps camp image"/>
          </div>
          <div id="right">
            <img src={subTitleImage} alt=""/>
          </div>
        </div>

        {/* Contents */}
        <div className="contents-container">
          <h2 id="about">概要と研究テーマ</h2>
          <p>
            岩井研究室は,スマートフォンや環境センサにより人々の生活を支援し,安心安全を保つ社会を目指しています。経済的なコストと使い易さを考慮し,高信頼,省電力を実現した持続可能なシステムの構築を目指します。またモビリティを利用した実空間計測のためのハード，通信，ミドルウエア，アプリ，クラウドシステムを中心に具体的には以下の中から選択し研究を行います．在学中に学会や研究会にて筆頭著者の論文を発表します。</p>
          <table className="themaList">
            <tbody>
              <tr className="themaFirst">
                <th rowSpan="6">人間</th>
                <td>気体センサを用いた生活環境計測システム＋BOT＋スマート家電制御</td></tr>
              <tr><td>センサノードのマーケティング応用・知的空間創生</td></tr>
              <tr><td>RFIDアンテナ透明化とその応用システム,NFC,センサ,スマホを用いたMusic Composition</td></tr>
              <tr><td>センサを用いた生活支援コンピューティング,SNSを用いた非同期感動共有システム</td></tr>
              <tr><td>Kinect v2,首振りカメラ,スマートフォン,空間プロジェクション技術,ウエラブルデバイスを用いたサイネージ・人流計測</td></tr>
              <tr><td>車両CANデータと車載のスマートフォンを用いた運転者と車両状態推定</td></tr>
              <tr className="themaFirst">
                <th rowSpan="4">防災</th>
                <td>高性能の水位センサ,発電機能を搭載したWSNノード開発,災害後情報共有システム</td></tr>
              <tr><td>NFCを用いた防災復興フィールドミュージアム,復興ポイントラリー</td></tr>
              <tr><td>降雨実験施設での土砂崩れを事前検知するセンサデータ処理</td></tr>
              <tr><td>気象予測を用いた土砂災害地域のセンサネットワークのシミュレーション</td></tr>
              <tr className="themaFirst">
                <th rowSpan="4">都市</th>
                <td>スマートフォン環境センシングとエラー検出・インセンティブモデルの研究</td></tr>
              <tr><td>AirealRobot，水上観測ロボット，屋外移動ロボットを用いた能動的環境計測</td></tr>
              <tr><td> Geotagを用いた人の流れ,都市イベント検知技術</td></tr>
              <tr><td>無線センサネットワークを応用した空調自動制御や歩行者ナビゲーションシステム</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
