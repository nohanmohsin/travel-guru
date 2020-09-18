import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header/Header';
import Container from './home-content/Container';
import './Home.css';
const Home = () => {
    let {name} = useParams();
    
    return (
        <div className='home'>
            <Header user=''></Header>
            <Container></Container>
        </div>
    );
};

export default Home;