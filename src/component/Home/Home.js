import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReview from '../hook/useReview';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    // const [reviews, setReviews] = useState([])
    // useEffect(() => {
    //     fetch(`data.json`)
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [])
    const [reviews, setReviews] = useReview()
    return (
        <div >
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
            <div>
                <h1 className='reviews'>Customer Reviews</h1>
                <div className='reviews-container'>
                    {

                        reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                    }

                </div>
            </div>
            <div className='reviews-btn-container'>
                <Link to='/reviews' className='reviews-btn'>See All Reviews</Link>
            </div>

        </div>
    );
};

export default Home;