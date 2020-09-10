import React from 'react';
import './Home.scss';

//import page sections
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';

const Home = () =>{
    return(
        <div className="Home">
            <FirstSection/>
            <SecondSection/>
        </div>
    );
};

export default Home;