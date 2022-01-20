import { useState } from 'react';
import './MakeOffer.css';
function MakeOffer() {
    return (
        <>
            <section className="offer-block">
                <div className="row" id="offer-header">
                    <div className="col-left">
                        <h3>Make an Offer </h3>
                        <span className="offer-txt1">#433849</span>
                    </div>
                    <div className="col-right">
                        <span> X </span>
                    </div>
                </div>

                <div className="row" id="offer-body">
                    <h3>Amount </h3>
                    <div className="col-body">
                        <span className="price-txt">0.000 </span>
                        <span className="right-txt">NEAR </span>
                    </div>
                    <div className="row" id="offer-balance">

                        <div className="col-left">
                            <h5>Balance </h5>
                        </div>
                        <div className="col-right">
                            <span> 0.3748NEAR </span>
                        </div>
                    </div>
                </div>

                <div className="row" id="offer-footer">
                    <a className="offer-btn fa fa-tag"> Make Offer </a>
                </div>
            </section>
        </>
    )
}
export default MakeOffer;