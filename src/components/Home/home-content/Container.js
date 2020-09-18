import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData'
import Card from './Card';
import InfoPlace from './InfoPlace';
const Container = (props) => {
    const placedata = fakeData;
    
    
    return (
        <div style={{display: "flex", width: "120%"}}>
            <div style={{width: "60%", }}><InfoPlace ></InfoPlace></div>
            
            <div style={{marginLeft: '40px', width:"70%", display: "flex"}}>
                {placedata.map(info => <Card info={info}></Card>)}
            </div>
            
        </div>
    );
};

export default Container;