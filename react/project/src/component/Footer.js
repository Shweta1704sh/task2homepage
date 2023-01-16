import React,{Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render(){
        return(
            <React.Fragment>
                <footer>
                    <div id="information">
                        <div id="promotion">
                            <i className='fa fa-plane' style={{fontSize:65,color:'cadetblue'}}></i>
                            <h4>Worldwide Delivery</h4>
                        </div>
                        <div id="promotion">
                            <i className='fa fa-unlock' style={{fontSize:65,color:'cadetblue'}}></i>
                            <h4>100% Safe & Secure Payment</h4>
                        </div>
                        <div id="promotion">
                            <i className='fa fa-user' style={{fontSize:65,color:'cadetblue'}}></i>
                            <h4>24*7 Service center</h4>
                        </div>
                    </div>
                    <hr/>
                    <div id="payment">
                        <div id="option">
                            <h3>Payment Options</h3>
                            <img src="https://i.ibb.co/bdqDQqD/payment1.jpg" alt="payment1" border="0" id="style1"/>
                        </div>
                        <div id="option">
                            <h3>Payment Gateway</h3>
                            <img src="https://i.ibb.co/XLhMKBz/payment2.jpg" alt="payment2" border="0" id="style1" />
                        </div>
                        <div id="option">
                            <h4>SHOP ON THE GO</h4>
                            <h5>Download mobile app</h5>
                            <i className='fa fa-android' id="operator"></i>
                            <i className='fa fa-apple' id="operator"></i>
                        </div>
                    </div>
                    <div className='footer'>
                        <p id="footer">&copy;FlowerStation</p>
                        <p id="copy">All rights Reserved</p>
                        <div id="follow">
                            <a href="https://in.pinterest.com/"><i className='fa fa-pinterest' style={{fontSize:48,marginRight:10,color:'red'}}></i></a>
                            <a href="https://www.linkedin.com/"><i className='fa fa-linkedin-square' style={{fontSize:48,marginRight:10,}}></i></a>
                            <a href="https://www.facebook.com/"><i className='fa fa-facebook' style={{color:'#1877f2',marginRight:10,fontSize:48}}></i></a>
                            <a href="https://www.instagram.com/"><i className='fa fa-instagram' style={{color:'#E4405F',marginRight:10,fontSize:48}}></i></a>
                            <a href="https://twitter.com/"><i className='fa fa-twitter color' style={{fontSize:48,marginRight:10,}}></i></a>
                            <a href="https://www.youtube.com/"><i className='fa fa-youtube-play' style={{fontSize:48,color:'red'}}></i></a>
                        </div>
                        <hr/>
                        <h5>Made By Shweta Sharma</h5> 
                        <hr/>
                        
                        <div id="footDiv">
                            <h2>About Company</h2>
                            <p>About Us</p>
                            <p>Terms And Conditions</p>
                            <p>Blog</p>
                        </div>
                        <div id="footDiv">
                            <h2>Customer Services</h2>
                            <p>Contact Us</p>
                            <p>Site Map</p>
                            <p>Returns</p>
                        </div>
                        <div id="footDiv">
                            <h2>My Account</h2>
                            <p>Account</p>
                            <p>Wish List</p>
                            <p>Order History</p>
                        </div>  
                        <div id="footDiv">
                            <h2>Our Policies</h2>
                            <p>Refund Policy</p>
                            <p>Cancellation Policy</p>
                            <p>Privacy Policy</p>
                        </div>
                        <hr/>
                         
                    </div>                  
                </footer>                    
            </React.Fragment>
        )
    }
}
export default Footer;