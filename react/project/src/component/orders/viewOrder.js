import React,{Component} from 'react';
import axios from 'axios';
import Display from './DisplayOrder';
import Header from '../Header';

const ourl = "http://localhost:9800/OrderDetails";

class ViewOrder extends Component{

    constructor(props){
        super(props)

        this.state={
            order:''
        }
    }

    render(){
        return(
            <>
                <Header/>
                <Display orderData={this.state.order}/>
            </>
        )
    }

    componentDidMount(){
        //axios.get(`${ourl}`).then((res)=>{this.setState({order:res.data})})
        axios.get(`${ourl}`).then((res) => {this.setState({order:res.data})})

    }
}
export default ViewOrder;