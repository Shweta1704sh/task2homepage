import React,{Component} from 'react';
import './Search.css';
import { Frame } from './Frame';

class Search extends Component {
    render(){
        return(
            <>
                <Frame name={"Flowers"} data={"flower"} />
                <Frame name={"Cake"} data={"cake"} />
                <Frame name={"Plants"} data={"plant"} />
                <Frame name={"Chocolate"} data={"chocolate"} />
            </>
        )
    }    
}
export default Search;