import React, { useEffect, useState } from 'react';
import useReview from '../hook/useReview';
import ReviewAll from '../ReviewAll/ReviewAll';
import './Reviews.css'


const Reviews = () => {
    // const [reviews, setReviews] = useState([])
    // useEffect(() => {
    //     fetch(`data.json`)
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [])
    const [reviews, setReviews] = useReview()

    return (
        <div>
            <h1 className='customer-title'>What Our Customer Says!!!</h1>
            <div className='reviewAll'>
                {
                    reviews.map(review => <ReviewAll key={review.id} review={review}></ReviewAll>)
                }
            </div>
        </div>
    );
};

export default Reviews;