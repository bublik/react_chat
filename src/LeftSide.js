import React, {Component} from 'react';
import logo from './logo.svg';
import ChannelContainer from './containers/ChannelContainer';
import DirectMessages from './components/DirectMessages';

class LeftSide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="LeftSide col-3">
        <img src={logo} className="App-logo" alt="logo"/>
        <h5 className="App-title">Welcome to React</h5>
        <ChannelContainer />
        <DirectMessages />
      </div>
    )
  }
}

export default LeftSide;