import React, { useState } from 'react';
import OptionsComponent from './OptionsComponent';

const Sidebar = (props) => {
    return (
        <div className='sidebar'>
            <h2>Search here!</h2>
            <OptionsComponent />
        </div>
    )
}

export default Sidebar;