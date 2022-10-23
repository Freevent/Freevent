import React, { useState } from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar'
import Heading from './Heading'
import DisplayContainer from './DisplayContainer'
import application from '../styles/application.scss'
import * as actions from '../../client/actions/actions'

const mapStateToProps = state => ({
    eventList: state.events.eventList,
});

const mapDispatchToProps = dispatch => ({
    updateEventsList: (events) => dispatch(actions.updateEventListActionCreator(events)),
    deleteEvent: (event) => dispatch(action.deleteEventActionCreator(event)),
});


const MainContainer = (props) => {
    return (
        <div className='maincontainer'>
            <Sidebar updateEvents={props.updateEventsList}/>
            <Heading />
            <DisplayContainer />
        </div>
    )
}

// export default MainContainer;
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);