import React, { useState } from 'react';


const SubmitButton = (props) => {
    return (
        <button onClick={props.getData}>
            Find events!
        </button>
    )
}

export default SubmitButton;