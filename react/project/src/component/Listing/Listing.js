import React,{Component} from 'react';
import axios from 'axios';
import './Listing.css';
import Header from '../Header';
import ListingDisplay from './ListingDisplay';

const listurl = "https://flowerstationapi.onrender.com/ProductDetails/?category_id="
//const listurl = "https:/localhost:9800/ProductDetails/?CategoryId="

class Listing extends Component {
    constructor(props){
        super(props)

        this.state={
            ProductList:'',
            productId:sessionStorage.getItem('productId'),
            userItem:''

        }
    }

    setDataPerFilter = (data) => {
        this.setState({ProductList:data})
    }

    addToCart=(data) => {
        this.setState({userItem:data})
    }

    process=()=>{
        sessionStorage.setItem('pro',this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.category_id}`);
    }

    render(){
        return(
            <>
                <Header/>
                <div className='col'>
                    <div className="row">
                        <ListingDisplay listData={this.state.ProductList}
                        finalOrder={(data) => {this.addToCart(data)}}/>
                        <center>
                            <button className='btn btn-info' style={{marginTop:10}}onClick={this.process}>Process</button> 
                        </center>
                    </div>
                    
                </div>
            </>
        )
    }

    //api with axios 
    componentDidMount(){
        let productId = this.props.match.params.productId;
        sessionStorage.setItem('productId',productId)
        axios.get(`${listurl}${productId}`)
        .then((res) => {this.setState({ProductList:res.data})})
    }

}

export default Listing;