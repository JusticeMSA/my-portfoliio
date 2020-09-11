import React from 'react';
import './Home.scss';

//import page sections
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import LastSection from './LastSection';

const Home = () =>{
    return(
        <div className="Home">
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <LastSection/>
        </div>
    );
};

export default Home;