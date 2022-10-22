import React, { useState } from 'react';
import Button from './Button';

const EventCard = (props) => {
    return (
        <div className='eventCard'>
            <div className='info'>
                Event information
                Event information
                Event information
                Event information
                Event information
                Event information
            </div>
            <div className='buttonWrapper'>
                <Button />
            </div>
        </div>
    )
}

export default EventCard;