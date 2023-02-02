import React,{Component} from 'react';
import axios from 'axios';
import './Listing.css';
import Header from '../Header';
import ListingDisplay from './ListingDisplay';

const listurl = "https://flowerstationapi.onrender.com/ProductDetails/?CategoryId="

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
                    <div className="filter">
                        <h3 style={{marginTop:30}}><center>Cost Filter</center></h3><hr/>
                    </div>
                    <div className="row">
                        <ListingDisplay listData={this.state.ProductList}
                        finalOrder={(data) => {this.addToCart(data)}}/>
                    </div>
                    <button className='btn btn-info btn-lg' style={{marginLeft:800,marginTop:10}}onClick={this.process}>Process</button>
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