import React from 'react';
import {Link} from 'react-router-dom'

const ListingDisplay =(props) => {

    const renderData = ({listData}) => { 
        if(listData){
            if(listData.length > 0){
                return listData.map((items)=>{
                    return(
                        <div key={items._id}>
                        <div id="container">
                           <Link to={`/Details`}>
                                <div id="tileContainer1">
                                    <div id="ProductImage">
                                        <img src={items.product_image} alt="img"/> 
                                    </div>
                                    <div id="ProductContent">
                                        <p>{items.product_name}</p>
                                        <p>Rs.{items.cost}</p>
                                </div>
                                <button className='btn btn-warning btn-sm' style={{'marginLeft':50}}>BACK</button>
                                <button className='btn btn-primary btn-sm' style={{'marginLeft':50}}>EXPLORE</button>
                            </div>
                            </Link>
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

    return(
        <>
        <div id="contentMain">
            {renderData(props)}
        </div>
        </>
    )
}

export default ListingDisplay;