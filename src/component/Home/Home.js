import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='car-container'>
            <div className='title-container'>
                <h1 className='title-one'>Your Dream Car</h1>
                <h1 className='title-two'>Your Tesla Car</h1>
                <p>Tesla, is an American electric vehicle and clean energy company based in Austin, Texas. Tesla designs and manufactures electric cars, battery energy storage from home to grid-scale, solar panels and solar roof tiles, and related products and services. Tesla is one of the world's most valuable companies and remains the world's most valuable automaker with a market capitalization of more than US $1 trillion.</p>
            </div>
            <div className='image-container'>
                <img src="https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80" alt="" />

            </div>
        </div>
    );
};

export default Home;