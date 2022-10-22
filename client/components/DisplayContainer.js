import React, { useState } from 'react';
import EventCard from './EventCard';

const DisplayContainer = (props) => {
    return (
        <div className='displayContainer'>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </div>
    )
}

export default DisplayContainer;