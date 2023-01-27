import React,{Component} from 'react';
import {Link} from 'react-router-dom'



class DetailDisplay extends Component {
    constructor(props){
        super(props)

        this.state={
            userItem:''
        }
    }

    orderId = [];

    placeOrder = (id) => {
        this.orderId.push(id);
        this.props.finalOrder(this.orderId)
    }

    removeOrder=(id)=>{
        if(this.orderId.indexOf(id) > -1){
            this.orderId.splice(this.orderId.indexOf(id), 1)
        }
        this.props.finalOrder(this.orderId)
    }

    addToCart=(data) => {
        this.setState({userItem:data})
    }
    

    process=()=>{
        sessionStorage.setItem('pro',this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.items.restaurant_name}`)

    }

    renderCart = (orders) => {
        if(orders){
            return orders.map((items,index) => {
                return(
                    <b key={index}>{items}&nbsp;</b>
                )
            })
        }
    }


    renderData = ({listData}) => { 
        if(listData){
            if(listData.length > 0){
                return listData.map((items)=>{
                    return(
                        <div key={items.p_id}>
                            <div id="containerDetail">
                                <div id="Container">
                                    <p>{items.p_id}</p>
                                    <div id="DetailImage">
                                        <img src={items.product_image} alt="img"/> 
                                    </div>
                                    <div id="DetailContent">
                                        <h4>{items.product_name}</h4>
                                        <p>{items.product_detail}</p>
                                        <p>Average Rating:
                                            <span style={{fontSize:24,color:'green'}}>&#9733;</span>
                                            {items.average_rating}
                                        </p>
                                        <p><b>Rs.{items.cost}</b></p>
                                        <div className="button">
                                            <button className="btn btn-success" onClick={()=>{this.placeOrder(items.p_id)}}>
                                                <span className="glyphicon glyphicon-plus">ADD TO CART</span>
                                            </button> &nbsp;
                                            <button className="btn btn-danger" onClick={()=>{this.removeOrder(items.p_id)}}>
                                                <span className="glyphicon glyphicon-minus">REMOVE FROM CART</span>
                                            </button> 
                                        </div>
                                        <Link to={`/placeOrder/${items.product_name}`}>
                                        <button className='btn btn-lg btn-info' style={{marginTop:20}}
                                        onClick={this.process}>Process</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })

            }else{
                return(
                    <div>
                        <h2>No Data Available As Per Filter..</h2>
                    </div>
                )
            }
        }else{
            return(
                <div>
                    
                    <h2>Loading..</h2>
              </div>
            )
        }
    }
    render(){
        return(
            <div>
                <div>
                    {this.renderData(this.props)}
                </div>
                <div className="col-md-12 bg-success">
                    <h1>Item Added</h1>
                    Item Numbers {this.renderCart(this.orderId)} Added
                </div>
                
            </div>
        )
    }

}

export default DetailDisplay;