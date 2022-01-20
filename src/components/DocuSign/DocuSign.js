import { useState } from 'react';
import './DocuSign.css';



import Img9 from '../../assets/images/img_9.png';
import Img10 from '../../assets/images/img_10.png';
import Img11 from '../../assets/images/img_11.png';



function DocuSign() {
    const [selectedTab, setTab] = useState("details")

    const openTab = (e, tab) => {
        setTab(tab)
    }
    return (
        <>

            <section className="profile">
                <div className="container">
                    <div className="p_head">
                        <div className="img">
                            <img src={Img9} alt="" />
                        </div>
                        <a href="#">
                            <i className="fas fa-external-link-alt"></i>
                            Share
                        </a>
                    </div>
                    <div className="p_content">
                        <div className="top">
                            <h4>Docu Sign</h4>
                            <p>Sign Smart Contracts seamlessly</p>
                            <a href="#">
                                Utilities
                            </a>
                        </div>
                        <div className="bottom">
                            <button className="open">
                                Open
                                <i className="fas fa-arrow-right"></i>
                            </button>
                            <p>
                                <span><i className="fas fa-user-friends"></i>
                                    24,000 + Users
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="p_footer"></div>
                </div>
            </section>
            <section className="tabber">
                <ul>
                    <li className="overview active" onClick={(e) => openTab(e, 'details')}>
                        <a href="#">Details</a>
                    </li>
                    <li className="activity" onClick={(e) => openTab(e, 'activities')}>
                        <a href="#">Activities</a>
                    </li>
                </ul>
                <div className="tab-content-wrapper">

                    {
                        selectedTab === "details" &&
                        <div className="tab-content overview-cont show" >
                            <h4>Overview</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium, suscipit eum,
                                nulla adipisci reiciendis rem fuga dolorem eos architect</p>
                            <a href="#">
                                <img src={Img10} alt="" />
                                https://docusignn.in
                            </a>
                        </div>
                    }

                    {
                        selectedTab === "activities" &&
                        <div className="tab-content activity-cont" >
                            <span className="badge">12 Activity Found</span>
                            <ul>
                                <li>
                                    <div className="img">
                                        <img src={Img11} alt="" />
                                    </div>
                                    <div className="content">
                                        <p>
                                            <span>Johndoe.near</span>
                                            Sign The Contract Successfully
                                        </p>
                                        <span className="date">2 days ago</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="img">
                                        <img src={Img11} alt="" />
                                    </div>
                                    <div className="content">
                                        <p>
                                            <span>Johndoe.near</span>
                                            Sign The Contract Successfully
                                        </p>
                                        <span className="date">2 days ago</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="img">
                                        <img src={Img11} alt="" />
                                    </div>
                                    <div className="content">
                                        <p>
                                            <span>Johndoe.near</span>
                                            Sign The Contract Successfully
                                        </p>
                                        <span className="date">2 days ago</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </section>
            <div className="share_popup">
                <div className="share-popup-inner">
                    <div className="title">
                        <h4>Share this Experience</h4>
                        <span>&times;</span>
                    </div>
                    <div className="copy-text">
                        https://jhgdheagdfehbjyufgf
                    </div>
                    <div className="copy-link">
                        <a href="#">
                            <i className="fas fa-copy"></i>
                            Copy Link
                        </a>
                    </div>
                    <div className="social-share">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-discord"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-telegram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}

export default DocuSign;
