import React,{Component} from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <React.Fragment>
                <header>
                    <div id="header">
                        <a className='navbar-brand' href="Home.js">
                            <div id="brand">
                                <h1>FlowerStation</h1>
                                <p>Send Flower Anywhere</p>
                            </div>  
                        </a>
                        <div id="icon">
                            <p>
                                <i className='fa fa-user' style={{fontSize:36, marginLeft:30}}></i>
                                <p>Login/Register</p>
                            </p>
                            <p>
                                <i className='fa fa-phone' style={{fontSize:36, marginLeft:10}}></i>
                                <p>Support</p>
                            </p>
                        </div>  
                    </div>
                </header> 
            </React.Fragment>
        )
    }
}
export default Header;