import React, { useState } from 'react';
import Button from './Button';

const EventCard = (props) => {
    const { eventName, location } = props.event
    return (
        <div className='eventCard'>
            <div className='info'>
                Name: {eventName}
                <br/>
                Location: {location}
            </div>
            <div className='buttonWrapper'>
                <Button />
            </div>
        </div>
    )
}

export default EventCard;