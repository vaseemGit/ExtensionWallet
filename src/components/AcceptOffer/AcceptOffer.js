import { useState } from 'react';
import './AcceptOffer.css';
import UserPic from '../../assets/images/user-pic.jpg';

function AcceptOffer() {
	return (
		<section className="counter-offer-block">
			<div className="row" id="offer-header">
				<div className="col-left">
					<h3>Accept Offer</h3>
					<span className="offer-txt1">#433849</span>
				</div>
				<div className="col-right">
					<span> X </span>
				</div>
				<div className="sender-txt">
					From &nbsp;
				</div>
				<div className="user-block">
					<div className="user-pic counter-offer-pic">
						<img src={UserPic} className="profile-pic" />
					</div>
					<div className="user-name">
						<p className="accepted-offer-user">&nbsp;CryptoKing.near</p>
					</div>
				</div>
			</div>
			<div className="accepted-amount-txt">
				<h4>Amount:<span> &nbsp;0.3647 NEAR</span> </h4>
			</div>

			<div className="row" id="counter-offer-footer">
				<a className="offer-btn fa fa-tag"> &nbsp;Confirm & Accept Offer</a>
			</div>
			<br />
			<span className="terms-txt">by clicking confirm you must agree to home page Terms & Conditions </span>
		</section>
	)
}
export default AcceptOffer;