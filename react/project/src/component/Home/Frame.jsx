import { Cards } from "./Cards";
import "./Frame.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Frame(props) {
  const [data,setData] = useState("");

  const GetData=()=>{
    axios.get(`https://flowerstationapi.onrender.com/${props.data}`).then((res)=>{
      setData( res.data);
    }).catch(err=>{
      setData(err);
    })
  }

  useEffect(()=>{
    GetData()
  });

  return (
    <div id="QuickSearch">
      <h1>{props.name}</h1>
      {
        data!==""?
        data.map((items)=>{
          console.log(data);
          return( 
            <Link to={`/Listing/${items.category_id}`}>
              <Cards name={items.type} image={items.image} key={items.id}/>
            </Link>
          )
        }):
          <p>Data Not found</p>
        }
      </div>
    );
}
