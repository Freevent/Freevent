import React, { useState } from 'react';
import axios from 'axios'

const OptionsComponent = (props) => {

    const fetchData = () => {
        axios('/events')
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form className="optionsForm">
                <label htmlFor="city">Find your event:</label>
                <input type="text" id="city" name="city"/>
                <p>What do you want to do?</p>
                    <div>
                        <input type="radio" id="outside" name="activity" value="outside"/>
                        <label htmlFor="outside">Go Outside</label><br/>
                        <input type="radio" id="inside" name="activity" value="inside"/>
                        <label htmlFor="inside">Stay Inside</label><br/>
                        <input type="radio" id="party" name="activity" value="party"/>
                        <label htmlFor="party">Party</label>
                    </div>
                <input onClick={fetchData} type="submit" value="Search!"/>
                <input type="reset" value="Clear"/>
            </form>
        </div>
    )
}

export default OptionsComponent;