import { useState } from 'react';
import './Offer.css';

import { INFO, PENDING_OFFERS, TRADING_HISTORY } from '../../store/constants/constants';
import HeaderBanner from '../../assets/images/header-banner.jpg';
import UserPic from '../../assets/images/user-pic.jpg';

function Offer() {
  const [selectedTab, setTab] = useState("info")

  const openTab = (e, tab) => {
    setTab(tab)
  }
  return (
    <>
      <section className="banner-block">
        <img src={HeaderBanner} className="custom-img" />
      </section>

      <section className="tabs-block">
        <p className="top-heading">Digital Ninja </p>
        <span className="ninja-txt">#72873 </span>
        <div className="user-block">
          <div className="user-pic">
            <img src={UserPic} className="profile-pic" />
          </div>
          <div className="user-name">
            <p>&nbsp;Johndoe.near</p>
          </div>
        </div>
        <br />
        <div className="tab">
          <button className={`tablinks` +(selectedTab === "info" && ' active')}  onClick={(e) => openTab(e, 'info')}>{INFO}</button>
          <button className={`tablinks` +(selectedTab === "pending_offers" && ' active')} onClick={(e) => openTab(e, 'pending_offers')}>{PENDING_OFFERS}</button>
          <button className={`tablinks` +(selectedTab === "trading_history" && ' active')} onClick={(e) => openTab(e, 'trading_history')}>{TRADING_HISTORY}</button>
        </div>

        {
          selectedTab === "info" &&

          <div className="tabcontent" >
            <h3>Info</h3>
            <p>This is info block</p>
          </div>
        }
        {selectedTab === "pending_offers" &&
          <div className="tabcontent">
            <h3>2 Active Offers</h3>
            <div className="offers-block">

              <div className="user-pic">
                <img src={UserPic} className="offers-pic" />
              </div>
              <div className="offer-name">
                <p><span className="offer-txt">&nbsp;Johndoe.near &nbsp;</span>Cryptoking.near made an offer of 0.345 NEAR</p>
                <span className="send-time">5 days ago</span>
              </div>
              <div className="action-btn">
                <a>Accept</a>
                <a>Counter Offer</a>
                <a>Reject</a>
              </div>
            </div>
          </div>
        }
        {selectedTab === "trading_history" &&
          <div className="tabcontent">
            <h3>Trade Histroy</h3>
            <div className="offers-block">
              <div className="user-pic">
                <img src={UserPic} className="offers-pic" />
              </div>
              <div className="offer-name">
                <p><span className="offer-txt">&nbsp;Johndoe.near &nbsp;</span>Cryptoking.near made an offer of 0.345 NEAR</p>
                <span className="send-time">5 days ago</span>
              </div>
            </div>
            <div className="offers-block">
              <div className="user-pic">
                <img src={UserPic} className="offers-pic" />
              </div>
              <div className="offer-name">
                <p><span className="offer-txt">&nbsp;Johndoe.near &nbsp;</span>Cryptoking.near made an offer of 0.345 NEAR</p>
                <span className="send-time">5 days ago</span>
              </div>
            </div>
          </div>

        }
      </section>
    </>
  );
}

export default Offer;
