import React, { useState } from 'react';


const Button = (props) => {
    const { deleteItem, id } = props;
    return (
        <button onClick={() => deleteItem(id)}></button>
    )
}

export default Button;