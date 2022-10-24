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
        image,
        id
    } = props.event
    const date = start_date.slice(0, 10)

    const alternateImg = (id) => {
        document.getElementById(id).src = "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80";
    }

    return (
        <div className='eventCard'>
            <div className='info'>
                <img id={id} src={image} onError={() => alternateImg(id)} alt={`${name.slice(0, 10)}-img`} />
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