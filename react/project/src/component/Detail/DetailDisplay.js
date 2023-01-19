import React from 'react';
import {Link} from 'react-router-dom'

const DetailDisplay =(props) => {

    const renderData = ({listData}) => { 
        if(listData){
            if(listData.length > 0){
                return listData.map((items)=>{
                    return(
                        <div key={items._id}>
                            <div id="containerDetail">
                                <div id="Container">
                                    <div id="DetailImage">
                                        <img src={items.product_image} alt="img"/> 
                                    </div>
                                    <div id="DetailContent">
                                        <h4 style={{textAlign:'center'}}>{items.product_name}</h4>
                                        <p style={{textAlign:'center'}}>{items.product_detail}</p>
                                        <p>Rs.{items.cost}</p>
                                        
                                    </div>
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

export default DetailDisplay;