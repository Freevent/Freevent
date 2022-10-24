import React, { useState } from 'react';
import Button from './Button';

const EventCard = (props) => {
    const { eventName, summary, date, location } = props.event
    return (
        <div className='eventCard'>
            <div className='info'>
                <span>Who:</span> {eventName}
                <span>What:</span> {summary}
                <span>When:</span> {date}
                <span>Where:</span> {location}
            </div>
            <div className='buttonWrapper'>
                <Button />
            </div>
        </div>
    )
}

export default EventCard;