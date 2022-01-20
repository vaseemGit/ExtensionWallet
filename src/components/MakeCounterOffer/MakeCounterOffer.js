import { useState } from 'react';
import './MakeCounterOffer.css';
import UserPic from '../../assets/images/user-pic.jpg';
function MakeCounterOffer() {
    return (
        <section className="counter-offer-block">
            <div className="row" id="offer-header">
                <div className="col-left">
                    <h3>Make Counter Offer </h3>
                    <span className="offer-txt1">#433849</span>
                </div>
                <div className="col-right">
                    <span> X </span>
                </div>
                <div className="sender-txt">
                    To
                </div>
                <div className="user-block">
                    <div className="user-pic counter-offer-pic">
                        <img src={UserPic} className="profile-pic" />
                    </div>
                    <div className="user-name">
                        <p>&nbsp;Johndoe.near</p>
                    </div>
                </div>
            </div>

            <div className="row" id="counter-offer-body">
                <h3>Amount </h3>
                <div className="col-body">
                    <span className="price-txt">0.000 </span>
                    <span className="right-txt">NEAR </span>
                </div>
            </div>

            <div className="row" id="counter-offer-footer">
                <a className="offer-btn fa fa-tag"> Make Offer </a>
            </div>
        </section>
    )
}
export default MakeCounterOffer;