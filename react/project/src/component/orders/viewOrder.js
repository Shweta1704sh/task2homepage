import React,{Component} from 'react';
import axios from 'axios';
import Display from './DisplayOrder';
import Header from '../Header';

const orderurl = "https://flowerstationapi.onrender.com/OrderDetails";
const ourl = "http://localhost:9800/updateorder";


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

    async componentDidMount(){
        if(this.props.location){
            let query = this.props.location.search.split('&');
            if(query){
                let data = {
                    "status": query[0].split('=')[1],
                    "date": query[2].split('=')[1],
                    "bank_name": query[3].split('=')[1]
                }
                let id = query[1].split('=')[1].split('_')[1];
                fetch(`${ourl}/${id}`,{
                    method:'PUT',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(data)
                })
                console.log(data)
                console.log(id)
            }
        }
        let sessionData = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(','):[]
        axios.get(`${orderurl}?email=${sessionData[1]}`).then((res) => {this.setState({order:res.data})})
    }
}
export default ViewOrder;