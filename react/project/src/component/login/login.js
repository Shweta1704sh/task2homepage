import React,{Component} from 'react';
import Header from '../Header';

const url = "http://localhost:5000/api/auth/login";

class Login extends Component{

    constructor(){
        super()

        this.state={
            email:"",
            password:'',
            message:''

        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message: data.token})
            }else{
                sessionStorage.setItem('ltk',data.token)
                this.props.history.push('/')
            }
        })
    }

    render(){
        return(
            <>
            <Header/>
            <center>
            <div className="container" style={{marginTop:30}}>
                <h3 style={{textAlign:'center'}}>Login Yourself</h3>
                <h2 style={{textAlign:'center', color:'red'}}>{this.state.message}</h2>

                <div className="container">
                    <div class="form-group col-md-6">
                        <label for="email">Email</label>
                        <input type="text" name="email" class="form-control"
                        value={this.state.email} onChange={this.handleChange}  />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="password">Password</label>
                       <input type="text" name="password" class="form-control"
                        value={this.state.password} onChange={this.handleChange}/>
                    </div>
                </div>
                <button className="btn btn-success" onClick={this.handleSubmit} style={{marginTop:10}}>
                    Login
                </button>
            </div>
            </center>
            </>
        )
    }
}

export default Login