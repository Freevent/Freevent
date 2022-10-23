import React, { useState } from 'react';


const SubmitButton = (props) => {
    return (
        <button onClick={props.click}>
            "Search!"
        </button>
    )
}

export default SubmitButton;