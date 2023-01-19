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
            ProductList:''
        }
    }

    setDataPerFilter = (data) => {
        this.setState({ProductList:data})
    }

    render(){
        return(
            <>
                <Header/>
                <div className='col'>
                    <div className="filter"></div>
                    <div className="row">
                        <ListingDisplay listData={this.state.ProductList}/>
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