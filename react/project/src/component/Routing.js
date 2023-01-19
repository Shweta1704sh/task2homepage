import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Home from './Home/Home';
import Listing from './Listing/Listing';
import Detail from './Detail/Detail';

const Routing = () => {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/Listing/:productId" component={Listing}/>
            <Route path="/Detail/:productId" component={Detail}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing