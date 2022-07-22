import React from 'react';

import './SecurityCard.scss';

const SecurityCard = (props) => {
    let { title, imgurl } = props;

    return (
        <div className='SecurityCard'>
            <img src={imgurl} className="SecurityCard--Img" alt="security" />
            <h1 className='SecurityCard--Para'>{title}</h1>
        </div>
    )
}

export default React.memo(SecurityCard);