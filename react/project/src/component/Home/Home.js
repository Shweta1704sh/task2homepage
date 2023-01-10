import React from 'react';
import QuickSearch from './QuickSearch';
import Search from './Search';
import Header from '../Header';
import Owldemo1 from './Owldemo1';
import Review from './Review'  
const Home = () => {
    return(
        <>
            <Header/>
            <QuickSearch/>
            <Owldemo1/>
            <Search/>
            <Review/>
        </>
    )
}

export default Home;