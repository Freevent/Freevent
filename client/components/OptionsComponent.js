import React, { useState } from 'react';

const OptionsComponent = (props) => {
    return (
        <div>
            <form className="optionsForm">
                <label for="city">Find your event:</label>
                <input type="text" id="city" name="city"/>
                <p>What do you want to do?</p>
                    <div>
                        <input type="radio" id="outside" name="activity" value="outside"/>
                        <label for="outside">Go Outside</label><br/>
                        <input type="radio" id="inside" name="activity" value="inside"/>
                        <label for="inside">Stay Inside</label><br/>
                        <input type="radio" id="party" name="activity" value="party"/>
                        <label for="party">Party</label>
                    </div>
                <input type="submit" value="Search!"/>
                <input type="reset" value="Clear"/>
            </form>
        </div>
    )
}

export default OptionsComponent;