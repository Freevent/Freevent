import React, { useState } from 'react';
import { connect } from 'react-redux';
import EventCard from './EventCard';
import * as actions from '../../client/actions/actions'

const mapStateToProps = state => ({
    eventList: state.events.eventList,
})

const mapDispatchToProps = dispatch => ({
    updateEventsList: (event) => dispatch(actions.updateEventListActionCreator(event)),
    deleteEvent: (event) => dispatch(actions.deleteEventActionCreator(event)),
})

const DisplayContainer = (props) => {
    const eventSelect = [];
    const { eventList } = props;


    for (let i = 0; i < eventList.length; i++) {
        eventSelect.push(<EventCard event={eventList[i]} />);
    }

    return (
        <div className='displayContainer'>
            {eventSelect}
        </div>
    )
}

// export default DisplayContainer;
export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer);