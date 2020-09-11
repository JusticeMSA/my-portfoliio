import React from 'react';
import '../../_theme.scss';
import './SecondSection.scss';
import photo from '../../images/my-photo.png';


const SecondSection = () =>{
    return(
        <section className="SecondSection">
            <div className="section-two">
                <h2>WHO AM I?</h2>
                <div className="container">
                    <img src={photo} alt=""/>
                    <div className="p-container">
                        <p>My name is Justice Mlangeni. I am a front-end developer 
                            based in  Benoni, South Africa. I fell inlove with software 
                            development the day i told a computer to write “Hello World” and
                            ever since I have been increasing my skills and knowlege by 
                            creating and communicating with the dev world.
                        </p>
                        <p>
                            I am currently looking for a junior front-end development job
                            that will allow me to learn more and grow as a front-end
                            developer.
                        </p>
                    </div>
                </div>
                <a href="/" className="yellow-effect-btn">READ MORE</a>
            </div>
        </section>
    );
}

export default SecondSection;