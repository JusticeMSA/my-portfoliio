import React from 'react';
import './FirstSection.scss';
import '../../_theme.scss';


const FirstSection = () =>{
    return(
        <section className="FirstSection">
            <div className="section-one pad">
                <div className="flex-container">
                    <div className="left">
                        
                    </div>
                    <div className="right">
                        <h1>HI,<br  className="remove-break"/> MY NAME IS <br/>JUSTICE <span >M</span>.</h1>
                        <p>I am a web developer.</p><br/>
                        <a href="" className="yellow-btn">Contact</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FirstSection;