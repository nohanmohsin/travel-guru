import React from 'react';

import hotel1 from "../../Image/Rectangle 26.png";
import hotel2 from "../../Image/Rectangle 27.png";
import hotel3 from "../../Image/Rectangle 28.png";
import './HotelInfo.css';

const HotelInfo = (props) => {
    const {name, id, price, quantity, cancellation} = props.hotel;
    let img;
    if (id == '1'){
        img = hotel1;
    }
    if (id == '2'){
        img = hotel2
    }
    if (id == '3'){
        img = hotel3
    }
    
    return (
        <div className="info-container" style={{display: "flex"}}>
            <img src={img} alt="img"/>
            <div className="info">
                <h3 className="white">{name}</h3>
                <span className="white">{quantity[0]} guests</span>
                <span className="white">{quantity[1]} bedrooms</span>
                <span className="white">{quantity[2]} beds</span>
                <span className="white">{quantity[3]} baths</span> 
                <br/>
                {
                    cancellation ? <p className="white">cancellation flexibility available</p> :
                    <p className="white" style={{marginBottom: "10px"}}>cancellation not available</p>
                }
                <br/>
                <h4 className="white">${price}/night</h4>
            </div>
            
        </div>
    );
};
export default HotelInfo;