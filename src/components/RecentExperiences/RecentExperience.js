import { useState } from 'react';
import './RecentExperience.css';


import SearchImg from '../../assets/images/search-img.png';
import Img1 from '../../assets/images/img_one.png';
import Img2 from '../../assets/images/img_2.png';
import Img3 from '../../assets/images/img_3.png';
import Img4 from '../../assets/images/img_4.png';
import Img5 from '../../assets/images/img_5.png';
import Img6 from '../../assets/images/img_6.png';


function RecentExperience() {
  const [selectedTab, setTab] = useState("info")

  const openTab = (e, tab) => {
    setTab(tab)
  }
  return (
    <>
      
      
    <header>
        <div className="container_inner">
            <div className="header-inner">
                <div className="header-search">
                    <form action="">
                        <button className="search">
                            <i className="fas fa-search"></i>
                        </button>
                        <input type="search" placeholder="Search Experience"/>
                    </form>
                    <div className="icon">
                        <a href="#">
                            <img src={SearchImg} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
            </div>
    </header>
   
    <section className="recent-exp">
        <div className="container_inner">
            <div className="recent-exp-inner">
                <div className="exp-title">
                    <h4>Recent Experience</h4>
                </div>
                <div className="exp-items">
                <div className="item defi-swap">
                    <div className="img">
                        <img src={Img1} alt=""/>
                    </div>
                    <div className="content">
                        <div className="text">
                            <h5>Defi Awap</h5>
                            <p>Swap Your Digital Assets</p>
                            <a href="#">+200 Users</a>
                        </div>
                        <div className="icon">
                           <a href="#">
                            <i className="fas fa-chevron-right"></i>
                           </a>
                        </div>
                    </div>
                </div>
                <div className="item docu">
                    <div className="img">
                        <img src={Img2} alt=""/>
                    </div>
                    <div className="content">
                        <div className="text">
                            <h5>Defi Awap</h5>
                            <p>Swap Your Digital Assets</p>
                            <a href="#">+200 Users</a>
                        </div>
                        <div className="icon">
                           <a href="#">
                            <i className="fas fa-chevron-right"></i>
                           </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  
        <section className="categories">
            <div className="container_inner">
                <div className="cat-inner">
                    <div className="cat-title">
                        <h4>Popular Catyegories</h4>
                        <a href="#">See All
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </div>
                    <div className="cat-card">
                    <div className="card exchages">
                        <div className="img">
                            <img src={Img3} alt=""/>
                        </div>
                        <div className="title">
                            <h6>Exchages</h6>
                            <a href="#"><i className="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                    <div className="card games">
                        <div className="img">
                            <img src={Img4} alt=""/>
                        </div>
                        <div className="title">
                            <h6>Games</h6>
                            <a href="#"><i className="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                    <div className="card marketplaces">
                        <div className="img">
                            <img src={Img5} alt=""/>
                        </div>
                        <div className="title">
                            <h6>Marketplaces</h6>
                            <a href="#"><i className="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                    <div className="card defi">
                        <div className="img">
                            <img src={Img6} alt=""/>
                        </div>
                        <div className="title">
                            <h6>Defi</h6>
                            <a href="#"><i className="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
      
    </>
  );
}

export default RecentExperience;
