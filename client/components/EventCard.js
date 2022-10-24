import React, { useState } from 'react';
import Button from './Button';

const EventCard = (props) => {
    console.log(props)
    const {
        name,
        start_date,
        summary,
        address
    } = props.event
    const date = start_date.slice(0, 10)
    return (
        <div className='eventCard'>
            <div className='info'>
                <span>Who:</span> {name}
                <span>What:</span> {summary}
                <span>When:</span> {date}
                <span>Where:</span> {address}
            </div>
            <div className='buttonWrapper'>
                <Button />
            </div>
        </div>
    )
}

export default EventCard;