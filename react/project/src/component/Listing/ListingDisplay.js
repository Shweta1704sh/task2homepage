import React from 'react';
import {Link} from 'react-router-dom'

const ListingDisplay =(props) => {

    const renderData = ({listData}) => { 
        if(listData){
            if(listData.length > 0){
                return listData.map((items)=>{
                    return(
                        <div key={items._id}>
                            <div id="containerMain">
                                <div id="tileContainer1">
                                    <div id="ProductImage">
                                        <img src={items.product_image} alt="img"/> 
                                    </div>
                                    <div id="ProductContent">
                                        <h4 style={{textAlign:'center'}}>{items.product_name}</h4>
                                        <p>Rs.{items.cost}</p>
                                        <p style={{marginLeft:75}}>Average Rating:
                                            <span style={{fontSize:24,color:'green'}}>&#9733;</span>
                                            {items.average_rating}
                                        </p>
                                    </div>
                                    <Link to={`/`}>
                                        <button className='btn btn-warning btn-lg' style={{'marginLeft':30}}>BACK</button>
                                    </Link>
                                    <Link to={`/Detail/${items.p_id}`}>
                                        <button className='btn btn-primary btn-lg' style={{'marginLeft':50}}>EXPLORE</button>
                                    </Link>
                                </div>
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