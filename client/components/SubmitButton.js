import React, { useState } from 'react';


const SubmitButton = (props) => {
    return (
        <button onClick={props.getData}>
            "Search!"
        </button>
    )
}

export default SubmitButton;