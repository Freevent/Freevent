import React, { useState } from 'react';
import Button from './Button';

const EventCard = (props) => {

    const deleteItem = (eventId) => {
        props.deleteEvent(eventId)
    }
    const {
        name,
        start_date,
        summary,
        address,
        id
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
                <Button id={id} deleteItem={deleteItem}/>
            </div>
        </div>
    )
}

export default EventCard;