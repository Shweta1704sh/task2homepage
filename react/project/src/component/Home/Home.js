import React from 'react';
import QuickSearch from './QuickSearch';
import Search from './Search';
import Header from '../Header';


const Home = () => {
    return(
        <>
            <Header/>
            <QuickSearch/>
            <Search/>
        </>
    )
}

export default Home;