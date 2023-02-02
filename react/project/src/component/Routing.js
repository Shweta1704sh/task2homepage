import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Home from './Home/Home';
import Listing from './Listing/Listing';
import PlaceOrder from './orders/placeOrder';
import ViewOrder from './orders/viewOrder';


const Routing = () => {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/Listing/:productId" component={Listing}/>
            <Route path="/placeOrder" component={PlaceOrder}/>  
            <Route path="/viewBooking" component={ViewOrder}/>
        
            <Footer/>
            
        </BrowserRouter>
    )
}

export default Routing