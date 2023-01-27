import React,{Component} from 'react';
import axios from 'axios';
import './Detail.css';
import DetailDisplay from './DetailDisplay';
import Header from '../Header';

const listurl = "http://localhost:9800/Details?p_id="

class Details extends Component {
    constructor(props){
        super(props)

        this.state={
            ProductList:'',
            
            productId:sessionStorage.getItem('productId'),
            userItem:''

        }
    }
    addToCart=(data) => {
        this.setState({userItem:data})
    }


    render(){
        return(
            <>
                <Header/>
                <DetailDisplay listData={this.state.ProductList}
                finalOrder={(data) => {this.addToCart(data)}}/>
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

export default Details;