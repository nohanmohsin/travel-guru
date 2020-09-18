import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../fakeData';
import  DatePicker  from "react-datepicker";
import Header from '../Home/Header/Header';
import './Booking.css';

const Booking = () => {
    const {pname} = useParams();
    
    const destination = fakeData.find(obj => pname === obj.name);
    const [startDate, setStartDate] = useState(new Date("2020/09/01"));
    const [endDate, setEndDate] = useState(new Date("2020/09/12"));
    return (
        <div className="booking">
            <Header user=''></Header>
            <div className="booking-container" style={{display: "flex"}}>
                <div className="booking-info">
                    <h1 style={{color: "white"}}>{pname}</h1>
                    <p style={{color: "white"}}>{destination.info}</p>
                </div>
                <div className="booking-card">
                    <p>Origin</p> <br/>
                    <input style={{width: "90%", height: "20px"}} type="text" name="" id="" placeholder="Dhaka"/><br/>
                    <input style={{width: "90%", height: "20px"}} type="text" name="" id="" placeholder={pname}/><br/>
                    <div style={{display: "flex"}}>
                        <div style={{display: "flex"}}>
                            <div>
                                <p>From</p> <br/>
                                <DatePicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}/>
                            </div>
                            <div style={{marginTop: "21px", marginLeft: "10px"}}>
                                <p>To</p>
                                <DatePicker
                                selected={endDate}
                                onChange={date => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}/>
                            </div>
                            
                        </div>
                    </div>
                    <Link to={`/hotels/${pname}`}><button style={{marginLeft: "30%"}} className="login-link">Start Booking</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default Booking;