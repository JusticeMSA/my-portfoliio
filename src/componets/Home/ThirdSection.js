import React from 'react';
import '../../_theme.scss';
import './ThirdSection.scss';

import photo1 from '../../images/photo2.jpg';
import photo2 from '../../images/photo1.jpg';
import photo3 from '../../images/photo3.jpg';

const ThirdSection = () =>{
    return(

        <section className="section-three">
        <h2>MY WORK</h2>
        <div className="container">
            <img src={photo1} alt=""/>
            <div className="description">
                <h5>BEHOLDER</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis culpa alias nostrum possimus quas?
                </p>
            </div>
        </div>

        <div className="container-reverse">
            <img src={photo2} alt=""/>
            <div className="description">
                <h5>HUG INSURANCE</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis culpa alias nostrum possimus quas?
                </p>
            </div>
        </div>

        <div className="container">
            <img src={photo3} alt=""/>
            <div className="description">
                <h5>BEHOLDER</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis culpa alias nostrum possimus quas?
                </p>
            </div>
        </div>
        <a href="/" className="yellow-effect-btn">MORE PROJECTS</a>
    </section>

    );
}

export default ThirdSection;
