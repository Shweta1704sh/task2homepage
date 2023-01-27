import React,{Component} from 'react';
import './placeOrder.css';
import Header from '../Header';

const url = "https://flowerstationapi.onrender.com//pro";

class PlaceOrder extends Component {
    constructor(props){
        super(props);

    

        //let sessionData

        this.state={
            id:Math.floor(Math.random()*10000),
            name:'Shweta',
            email:'shweta@gmail.com',
            cost:0,
            phone:'9910961025',
            address:"Hno 62 nagpur",
            ProductList:''
        }
        
    }

    handleChange =(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    render(){
        return(
            <>
            <Header/>
            <div className='container-fluid'>
                <h4 className='container' >Details Of Your Order</h4>
                <div className='col-md-12'>
                    <form>
                        <input type="hidden" name="cost" value={this.state.cost} style={{border:'2px solid red'}}/>
                        <input type="hidden" name="id" value={this.state.p_id}/>
                        <input type="hidden" name="hotel_name" value={this.state.product_name}/>
                        <div className="col-md-8">
                            <div className="form-group col-md-6">
                                <label for="fname" className="control-label">FirstName</label>
                                <input className="form-control" id="fname" name="name" value={this.state.name} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="email" className="control-label">Email</label>
                                <input className="form-control" id="email" name="email" value={this.state.email}
                                onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="phone" className="control-label">Phone</label>
                                <input className="form-control" id="phone" name="phone" value={this.state.phone}
                                onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="address" className="control-label">Address</label>
                                <input className="form-control" id="address" name="address" value={this.state.address}
                                onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Total Price is Rs.{this.state.cost}</h2>
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <button className="btn btn-success" onClick={this.checkout}type="submit">PlaceOrder</button>
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                    </form>
                </div>
            </div>
            </>
        )
    }

    componentDidMount(){
        
        let ProductList = sessionStorage.getItem('pro');
        let orderId = [];
        ProductList.split(',').map((items) => {
            orderId.push(parseInt(items));
            return 'ok'
        })

        console.log(">>ProductList",orderId)

        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })

    }

    }

export default PlaceOrder