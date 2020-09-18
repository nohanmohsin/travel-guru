import React from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData'

const InfoPlace = (props) => {
    
    let {name} = useParams();

    if (name == null) {
        name = "COX'S BAZAR";
    }
    const info = fakeData.find(obj => name === obj.name);
    return (
        <div>
            <h1 style={{color: "white"}}>{name}</h1>
            <p style={{color: "white"}}>{info.info}</p>
            <Link to={'/booking/'+ name}><button className="login-link">Booking </button></Link>
        </div>
    );
};

export default InfoPlace;