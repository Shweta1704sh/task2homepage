import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl.css'; 
export class Review extends Component {  
        render()  
        {  
          return (  
            <div id="review">  
                <h3 id="tile1">OUR CUSTOMER REVIEW</h3>             
                <OwlCarousel items={5} className="owl-theme"  
                    loop
                    nav
                    margin={10} > 
                    <div className="card desc">
                        <img className="card-img-top" src="https://i.ibb.co/BwB2rCk/p-basket-of-50-red-roses-61671-m.jpg" alt="p-basket-of-50-red-roses-61671-m"  id="cardImg" border="0"/>
                        <div className="card-body" style={{marginLeft:10}}>
                            <h5 className="card-title"><i className="fa fa-user" style={{fontSize:16}}></i>Shweta Sharma</h5>
                            <p className="card-text">
                                <span className="fa fa-star" style={{color:'lightgreen'}}></span>
                                <span className="fa fa-star" style={{color:'lightgreen'}}></span>
                                <span className="fa fa-star" style={{color:'lightgreen'}}></span>
                                <span className="fa fa-star" style={{color:'lightgreen'}}></span>
                                <p>Great Experience & On-time Delivery</p>
                            </p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card desc">
                        <img className="card-img-top" src="https://i.ibb.co/2yCp3C3/chocolates-n-mixed-flowers-pink-round-box.jpg" alt="p-basket-of-50-red-roses-61671-m"  id="cardImg" border="0"/>
                        <div className="card-body" style={{marginLeft:10}}>
                            <h5 className="card-title"><i className="fa fa-user" style={{fontSize:16}}></i>Smriti Verrma</h5>
                            <p className="card-text">
                                <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                                <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                                <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                                <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                                <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                                <p>I ordered at short notice but I got it on-time</p>
                            </p>
                            <p className="card-text"><small className="text-muted">Last updated 10 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card desc">
                        <img className="card-img-top" src="https://i.ibb.co/GxCHXB6/10-pink-roses-delhi333.jpg" alt="p-basket-of-50-red-roses-61671-m"  id="cardImg" border="0"/>
                        <div className="card-body" style={{marginLeft:10}}>
                            <h5 className="card-title"><i className="fa fa-user" style={{fontSize:16}}></i>Sidharth Maheswari</h5>
                            <p className="card-text">
                            <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                            <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                            <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                            <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                            <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                            <p>Excellent Services</p>
                            </p>
                            <p className="card-text"><small className="text-muted">Last updated 3 days ago</small></p>
                        </div>
                    </div>
                    <div className="card desc">
                        <img className="card-img-top" src="https://i.ibb.co/NrBQS1w/birthday-special-syngonium-plant.webp" alt="p-basket-of-50-red-roses-61671-m"  id="cardImg" border="0"/>
                        <div className="card-body" style={{marginLeft:10}}>
                            <h5 className="card-title"><i className="fa fa-user" style={{fontSize:16}}></i>Rupal Jain</h5>
                            <p className="card-text">
                                <span className="fa fa-star" style={{color:'orangered'}}></span>
                                <span className="fa fa-star" style={{color:'orangered'}}></span>
                                <span className="fa fa-star" style={{color:'orangered'}}></span>
                                <p>Average Experience</p>
                            </p>
                            <p className="card-text"><small className="text-muted">Last updated 43 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card desc">
                        <img className="card-img-top" src="https://i.ibb.co/m0DWJ7V/Rejoice-Combo.jpg" alt="p-basket-of-50-red-roses-61671-m"  id="cardImg" border="0"/>
                        <div className="card-body" style={{marginLeft:10}}>
                            <h5 className="card-title"><i className="fa fa-user" style={{fontSize:16}}></i>Suresh Kapoor</h5>
                            <p className="card-text">
                                <span className="fa fa-star" style={{color:'red'}}></span>
                                <span className="fa fa-star" style={{color:'red'}}></span>
                                <p>Bad Quality & Late Delivery</p>
                            </p>
                            <p className="card-text"><small className="text-muted">Last updated 3 months ago</small></p>
                        </div>
                    </div>
                    <div className="card desc">
                        <img className="card-img-top" src="https://i.ibb.co/smf9rmp/tweetycake.jpg" alt="tweetycake" border="0" id="cardImg"/>
                        <div className="card-body" style={{marginLeft:10}}>
                            <h5 className="card-title"><i class="fa fa-user" style={{fontSize:16}}></i>Deepika Gupta</h5>
                            <p className="card-text">
                                <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                                <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                                <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                                <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                                <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                                <p>Lovely cake with awesome taste</p>
                            </p>
                            <p className="card-text"><small className="text-muted">Last updated 40 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card desc">
                        <img className="card-img-top" src="https://i.ibb.co/XCZ5TX6/rocher-rectangular-box.jpg" alt="tweetycake" border="0" id="cardImg"/>
                        <div className="card-body" style={{marginLeft:10}}>
                            <h5 className="card-title"><i class="fa fa-user" style={{fontSize:16}}></i>Manpreet Grover</h5>
                            <p className="card-text">
                                <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                                <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                                <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                                <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                                <span className="fa fa-star" style={{color:'darkgreen'}}></span>
                                <p>Awesome site to send love to loved ones</p>
                            </p>
                            <p className="card-text"><small className="text-muted">Last updated 23 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card desc">
                        <img className="card-img-top" src="https://i.ibb.co/XbPYRQc/chocolate.webp" alt="tweetycake" border="0" id="cardImg"/>
                        <div className="card-body" style={{marginLeft:10}}>
                            <h5 className="card-title"><i class="fa fa-user" style={{fontSize:16}}></i>Vibhor Pandit</h5>
                            <p className="card-text">
                                <span className="fa fa-star" style={{color:'lightgreen'}}></span>
                                <span className="fa fa-star" style={{color:'lightgreen'}}></span>
                                <span className="fa fa-star" style={{color:'lightgreen'}}></span>
                                <span className="fa fa-star" style={{color:'lightgreen'}}></span>
                                <p>I'm happy and satisfied customer</p>
                            </p>
                            <p className="card-text"><small className="text-muted">Last updated 53 days ago</small></p>
                        </div>
                    </div>
                </OwlCarousel>  
            </div>  
        )  
        }  
    }  
        
  
export default Review 