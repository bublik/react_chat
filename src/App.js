import React, {Component} from 'react';
import LeftSide from './LeftSide';
import Container from './Container';
import './css/App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container-fluid" style={{height: 100 + '%'}}>
                    <div className="row" style={{height: 100 + '%'}}>
                        <LeftSide/>
                        <Container/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
