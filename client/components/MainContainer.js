import React, { useState } from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar'
import Heading from './Heading'
import DisplayContainer from './DisplayContainer'
import application from '../styles/application.scss'

const mapStateToProps = state => ({
    eventList: state.events.eventList,
})

const mapDispatchToProps = dispatch => ({
    updateEventsList: (event) => dispatch(actions.updateEventListActionCreator(event)),
    deleteEvent: (event) => dispatch(action.deleteEventActionCreator(event)),
})


const MainContainer = (props) => {
    return (
        <div className='maincontainer'>
            <Sidebar />
            <Heading />
            <DisplayContainer />
        </div>
    )
}

// export default MainContainer;
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);