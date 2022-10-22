import React, { useState } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    eventList: state.events.eventList,
})

const mapDispatchToProps = dispatch => ({
    updateEventsList: (event) => dispatch(actions.updateEventListActionCreator(event)),
    deleteEvent: (event) => dispatch(action.deleteEventActionCreator(event)),
})

const DisplayContainer = (props) => {
    return (
        <div className='displayContainer'>in display</div>
    )
}

// export default DisplayContainer;
export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer);