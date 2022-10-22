import React, { useState } from 'react';
import Sidebar from './Sidebar'
import Heading from './Heading'
import DisplayContainer from './DisplayContainer'
import application from '../styles/application.scss'

const MainContainer = (props) => {
    return (
        <div className='maincontainer'>
            <Sidebar />
            <Heading />
            <DisplayContainer />
        </div>
    )
}

export default MainContainer;