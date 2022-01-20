import { useState } from 'react';
import './RejectOffer.css';

function RejectOffer() {
    return (
        <section className="counter-offer-block">
		<div className="row" id="offer-header">
			<div className="col-left">
				<h3>Reject Offer </h3>
					<span className="offer-txt1">#433849</span>
			</div>
			<div className="col-right">
				<span> X </span>
			</div>
			
				
		</div>
		
		<div className="row" id="counter-offer-body">
			<h3>Reason </h3>
			<div className="col-body">
				<select className="reject-offer-select">
					<option>Not for Sale </option>
					<option>sale list </option>
				</select>
			</div>
		</div>
		
		<div className="row" id="counter-offer-footer">
			<a className="reject-btn fa fa-tag"> Reject Offer </a>
		</div>
	</section>
    )
}
export default RejectOffer;