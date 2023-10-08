import React from 'react';

const Topic = ({ name, imageUrl }) => {
    return (
        <div className="topic">
            <img src={imageUrl} alt={name} />
            <p>{name}</p>
        </div>
    );
};

export default Topic;
