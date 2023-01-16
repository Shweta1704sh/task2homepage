import React,{Component} from 'react';
import { Link } from "react-router-dom";
import './Header.css';

class Header extends Component {
    render(){
        return(
            <React.Fragment>
                <>
                <div id="header">
                    <Link to ="/" className='navbar-brand'>
                        <div id="brand">
                            <h1>FlowerStation</h1>
                            <p>Send Flower Anywhere</p>
                        </div>  
                    </Link>
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
                </>
            </React.Fragment>
        )
    }
}
export default Header;