import React from 'react';
import { Component } from 'react';
import './Listing.js';


class ListingDisplay extends Component {
    constructor(props){
        super(props)

        this.state={
            userItem:'',
            details:''
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
                        <div key={items._id}>
                            <div id="containerMain">
                                <div id="tileContainer2">
                                    <div id="ProductImage">
                                        <img src={items.product_image} alt="img"/> 
                                    </div>
                                    <div id="ProductContent">
                                        <h4 className='frame'>{items.product_name}</h4>
                                        <p>{items.product_detail}</p>
                                        <p>Average Rating:
                                            <span style={{fontSize:24,color:'green'}}>&#9733;</span>
                                            {items.average_rating}
                                        </p>
                                        <p><b>Rs.{items.cost}</b></p>
                                    </div>
                                    <center>
                                    <div className="button">
                                        <button className="btn btn-success" onClick={()=>{this.placeOrder(items.p_id)}}>ADD TO CART</button>
                                        <button className="btn btn-danger" onClick={()=>{this.removeOrder(items.p_id)}}>REMOVE FROM CART</button>                                          
                                    </div>
                                    </center>
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
                <div className="items">
                <h1>Item Added</h1>
                    Item Numbers {this.renderCart(this.orderId)} Added                    
                </div>
                
            </div>
        )
    }
    
}

export default ListingDisplay;