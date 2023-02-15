import React,{Component} from 'react';
import { Link ,withRouter} from "react-router-dom";
import './Header.css';

const url = "http://localhost:5000/api/auth/userInfo";

class Header extends Component {
    constructor(){
        super()

        this.state={
            userData:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            let outArray = [data.name,data.email,data.phone];
            sessionStorage.setItem('userInfo',outArray)
            return(
                <div id="icon">
                    <Link to="/login">
                        <i class="fa fa-user icon">&nbsp;Hi {data.name}</i>
                    </Link> &nbsp;
                    <button onClick={this.handleLogout} className="btn btn-danger">
                        <span></span>Logout
                    </button>
                </div>
            )
        }else{
            return(
                <div id="header">
                    <div id="icon">
                    <Link to="/login" className="btn btn-success">
                        <span></span>Login
                    </Link> &nbsp;
                    <Link to="/register" className="btn btn-danger">
                        <span></span>Register
                    </Link>

                    </div>  
                </div>
            )
        }  
          
    }

    render(){
        return(
            <React.Fragment>
                <div id="header">
                    <Link to ="/" className='navbar-brand'>
                        <div id="brand">
                            <h1>FlowerStation</h1>
                            <p>Send Flower Anywhere</p>
                        </div>  
                    </Link>
                    {this.conditionalHeader()}
                </div>  
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk'),
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
    
}

export default withRouter(Header);