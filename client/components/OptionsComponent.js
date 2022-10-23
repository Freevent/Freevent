import React, { useState } from 'react';
import axios from 'axios';
import SubmitButton from './SubmitButton'

const OptionsComponent = (props) => {
    const getData = () => {
        axios.post('/events', { requestName: 'fun times' })
            .then(res => props.updateEvents(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className="submitWrapper">
            <form className="optionsForm">
                <label htmlFor="city">Find your next event:</label>
                <input type="text" id="city" name="city" placeholder="Enter city..."/>
                <p>What do you want to do?</p>
                    <div>
                        <input type="radio" id="outside" name="activity" value="outside"/>
                        <label htmlFor="outside">Go Outside</label><br/>
                        <input type="radio" id="inside" name="activity" value="inside"/>
                        <label htmlFor="inside">Stay Inside</label><br/>
                        <input type="radio" id="party" name="activity" value="party"/>
                        <label htmlFor="party">Party</label>
                    </div>
                <input id="reselect" type="reset" value="Reselect options"/>
            </form>      
                <SubmitButton getData={getData} />
        </div>
    )
}

export default OptionsComponent;