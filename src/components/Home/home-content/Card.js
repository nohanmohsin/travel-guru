import React from 'react';
import './Card.css';
import image1 from '../../../Image/Rectangle 1.png';
import image2 from '../../../Image/Sreemongol.png';
import image3 from '../../../Image/sundorbon.png';
import { Link } from 'react-router-dom';
const Card = (props) => {
    let {name, image} = props.info;
    const imgarray = [image1, image2, image3];
    
    if (name == "COX'S BAZAR" ){image = image1}
    else if (name == "SHREEMONGOL"){image = image2}
    else{image = image3}
    return (
        <div className="Card">
            <Link to={"/home/"+ name}>
                <div>
                    <img style={{width: "100%",height: "100%", position: "absolute", zIndex: 1, borderRadius: "20px"}} src={image} alt=""/>
                    <h2 style={{zIndex: 2, position: "relative"}} className="name">{name}</h2>
                </div>
            </Link>

        </div>
    );
};

export default Card;