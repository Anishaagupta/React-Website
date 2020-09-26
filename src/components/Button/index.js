import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium','btn--large'];

export const Button = ({children, type, buttonSize, onClick, buttonStyle}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle: STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize)? buttonStyle: SIZES[0];
    return(
        <Link to="/contact" className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
            {/* <Button>Get Started  </Button> */}
        </Link>
    )
}