import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../../App';
import Header from '../Home/Header/Header';
import hotelFakeData from '../hotelFakeData';
import HotelInfo from './HotelInfo';
import "./Hotels.css";
import MapContainer from './GoogleMaps';
const Hotels = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const user = {...loggedInUser};
    let {name} = useParams();
    
    const hotels = hotelFakeData.filter(hotel => hotel.place == name);
    
    return (
        <div className="main-container">
            <Header user={user}></Header>
            <h1>Stay In {name}</h1>
            <div className="hotels-container">
                <div>
                {
                    hotels.map(hotel => <HotelInfo key={hotel.id} hotel={hotel}></HotelInfo>)
                }
                </div>
                <div style={{position: "relative"}}>
                    <MapContainer></MapContainer>
                </div>
            </div>
            
        </div>
    );
};

export default Hotels;