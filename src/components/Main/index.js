import React from 'react';
import {Button} from '../Button';
import '../../App.css';
import './index.css';

const index = () => {
    return (
        <div className="hero-container">
        <video src="/videos/vi4.mp4" autoPlay loop muted/>
        <h1>ADVENTURE AWAITS</h1>
        <p >What are you waiting for?</p>
        <div className="hero-btns">
           <Button className="btns" buttonStyle= 'btn--outline' buttonSize='btn--large'>GET STARTED</Button> 
           {/* <Button className="btns" buttonStyle= 'btn--primary' buttonSize='btn--large'>Book Your Tickets<i className="far fa-play-circle"/></Button>  */}
           <Button className="btns" buttonStyle= 'btn--primary' buttonSize='btn--large'>Book Your Tickets</Button> 
        </div>
        </div>
    )
}

export default index;
