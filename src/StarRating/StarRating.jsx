import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...new Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className='star'
              color={ratingValue <= (hover || rating) ? 'orange' : 'grey'}
              size={50}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      {rating && <h1>The Rating is {rating}.</h1>}
    </div>
  );
};

export default StarRating;
