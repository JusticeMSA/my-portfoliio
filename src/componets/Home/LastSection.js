import React from 'react';
import '../../_theme.scss';
import './LastSection.scss';

const LastSection = () =>{
    return(
        <section className="last-section">
            <h2>GET IN TOUCH</h2>

            <form action="">
                <input type="text" name="name" id="name" placeholder="Name"/>
                <input type="email" name="email" id="email" placeholder="Email"/>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                <button type="submit" className="btn-yellow">Send</button>
            </form>
        </section>
    );
}

export default LastSection;