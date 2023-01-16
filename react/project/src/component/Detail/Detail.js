import React,{Component} from 'react';
import axios from 'axios';
import './Detail.css';
import Header from '../Header';


class Listing extends Component {
    constructor(props){
        super(props)

        this.state={
            ProductList:''
        }
    }

    setDataPerFilter = (data) => {
        this.setState({restaurantList:data})
    }

    render(){
        return(
            <>
                <Header/>
                <div className="row">
                </div>
            
            </>
        )
    }

    //api with axios 
    componentDidMount(){
    
    }
}

export default Listing;