import React, { Component } from 'react';
import MainContainer from './components/MainContainer'


class App extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    componentDidMount() {
        console.log("I mounted!")
    }
    render() {
        return (
            <div>
                <MainContainer />
            </div>
        )
    }
}

export default App;