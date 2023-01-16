import React from 'react';
import {Link} from 'react-router-dom';

const Cake = (props) => {

    const cakeproduct  = ({productData}) => {
        if(productData){
            return productData.map((item) => {
                return(
                    <Link to={`/listing/${item.id}`}>
                        <div id="content" key={item.id}>
                            <div id="DivImage">
                                <img src={item.image} alt="all-flower-cetegery" border="0"/>
                            </div>
                            <div id="DivDetail">
                                <a href="listing.html">{item.type}</a>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }


    return(
        <div id="main">
            {cakeproduct(props)}
                
        </div>
        
    )
}

export default Cake;