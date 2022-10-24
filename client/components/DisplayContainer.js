import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import EventCard from './EventCard';
import * as actions from '../../client/actions/actions'

const mapStateToProps = state => ({
    eventList: state.events.eventList,
})

const mapDispatchToProps = dispatch => ({
    updateEventsList: (event) => dispatch(actions.updateEventListActionCreator(event)),
    deleteEvent: (eventId) => dispatch(actions.deleteEventActionCreator(eventId)),
})

const DisplayContainer = (props) => {
    const eventSelect = [];
    const { eventList } = props;

    useEffect(() => {   
        for (let i = 0; i < eventList.length; i++) {
            eventSelect.push(<EventCard event={eventList[i]} deleteEvent={props.deleteEvent}/>);
        }
    });

    for (let i = 0; i < eventList.length; i++) {
        eventSelect.push(<EventCard event={eventList[i]} deleteEvent={props.deleteEvent}/>);
    }
    return (
        <div className='displayContainer'>
            {eventSelect}
        </div>
    )
}

// export default DisplayContainer;
export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer);