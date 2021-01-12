import React from 'react';

// using destructuring instead of this.props
const Card = ({ name, email, id }) => {
    return (
        // adjust css elements using tachyons
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/* randomize robot image */}
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;