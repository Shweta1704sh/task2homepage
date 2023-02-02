import React,{Component} from 'react';
import './placeOrder.css';
import Header from '../Header';

const url = "http://localhost:9800/pro";
const oUrl="http://localhost:9800/placeOrder"

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

    renderItem=(data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="orderItems" key={item.p_id}>
                        <img src={item.product_image} alt={item.menu_name}/>
                        <h3>{item.product_name}</h3>
                        <h5>Rs. {item.cost}</h5>
                    </div>
                )
            })
        }
    }

    checkout=() => {
        let obj = this.state;
        obj.ProductList = sessionStorage.getItem('pro');
        fetch(oUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        //console.log('order added')
        .then(this.props.history.push('/viewBooking'))

    }


    render(){
        return(
            <>
            <Header/> 
            <div className='containerForm'>
                <div className='heading'>
                    <p>Details Of Your Order</p>
                </div>
                <div className='form'>
                    {this.renderItem(this.state.ProductList)}
                    <div className='cost'>
                        <h2>Total Price is Rs.{this.state.cost}</h2>
                        <p>Delivery Charges:Rs.100</p>
                    </div>
                </div>
                <div className='FormContent'>
                    <form className='row'>
                        <input type="hidden" name="cost" value={this.state.cost}/>
                        <input type="hidden" name="id" value={this.state.id}/>
                        <div className='col-md-6'>
                            <label for="name" className="control-label">Name</label>
                            <input className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>                           
                        </div>
                        <div className='col-md-6'>
                            <label for="phone" className="control-label">Contact Number</label>
                            <input className="form-control" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                        </div>
                        <div className='col-md-12'>
                            <label for="email" className="control-label">Email</label>
                            <input className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className='col-md-12'>
                            <label for="address" className="control-label">Delivery Address</label>
                            <input className="form-control" id="address" name="address" value={this.state.address} onChange={this.handleChange}/>      
                        </div>
                        <button className='btn btn-success' style={{marginTop:15}} onClick={this.checkout} type="submit">PLACE ORDER</button>
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
        let orderID ={id:orderId}
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderID)
        })
        .then((res) => res.json())
        .then((data) => {
            let totalPrice = 0;
            data.map((item) => {
                totalPrice = totalPrice+100+ parseFloat(item.cost);
                return 'ok'
            })
            this.setState({ProductList:data,cost:totalPrice})
        })

    }
}
export default PlaceOrder