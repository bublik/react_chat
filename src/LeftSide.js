import React, {Component} from 'react';
import logo from './logo.svg';

class LeftSide extends Component {
    render() {
        return (
            <div className="LeftSide col-3">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
            </div>
        )
    }
}

export default LeftSide;