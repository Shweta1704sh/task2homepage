import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Home from './Home/Home';
import Listing from './Listing/Listing';
import PlaceOrder from './orders/placeOrder';
import ViewOrder from './orders/viewOrder';
import Register from './login/register';
import Login from './login/login';



const Routing = () => {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/Listing/:productId" component={Listing}/>
            <Route path="/placeOrder" component={PlaceOrder}/>  
            <Route path="/viewBooking" component={ViewOrder}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Footer/>
            
        </BrowserRouter>
    )
}

export default Routing