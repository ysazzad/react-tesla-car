import React from 'react';
import './Review.css'

const Review = ({ review }) => {

    const { name, comment, rating, img } = review
    return (
        <div >
            <div className='review-detail'>
                <img src={img} alt="" />
                <h4 className='name'>Name: {name}</h4>
                <p className='comment'>Comment: {comment}</p>
                <p className='rating'>Rating: {rating}</p>

            </div>
        </div>
    );
};

export default Review;