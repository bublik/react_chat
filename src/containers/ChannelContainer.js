import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import ChannelComponent from '../components/ChannelComponent';
import {loadMessages} from '../actionCreators/ChannelActionCreators';

class ChannelContainer extends Component {
  constructor(props) {
    super(props);
    const {dispatch} = props;
    this.state = {
      rooms: [],
      isLoading: false,
      error: null
    };

    this.actionCreators = bindActionCreators({loadMessages: loadMessages}, dispatch);
    //console.log(this.actionCreators)
  };

  fetch_rooms() {
    let { dispatch, rooms } = this.props

    fetch('/rooms.json',
      {
        method: 'GET',
        //mode: 'no-cors',
        headers: {Accept: 'application/json', 'Content-Type': 'application/json'}
        //body: JSON.stringify({}) for POST request
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({rooms: data, isLoading: false}))
      .catch(error => this.setState({error, isLoading: false}));
  };

  componentDidMount() {
    this.setState({isLoading: true});
    this.fetch_rooms();

    // let action = ChannelActionCreators.loadChannels
    // dispatch(action)
  };

  render() {
    const {rooms, isLoading, error} = this.state;

    var status = null;

    if (error) {
      status = <p>{error.message}</p>;
    }
    if (isLoading) {
      status = <p>Loading ...</p>;
    }

    return (
      <div className="Channels">
        <div className="clearfix title">Rooms <Button className="btn-info btn-circle float-right">+</Button></div>
        <ChannelComponent rooms={rooms} actionCreators={this.actionCreators}/>
        <div>{status}</div>
      </div>
    )
  }
}

ChannelContainer.propTypes = {
  // error: PropTypes.bool,
  // loading: PropTypes.bool,
  rooms: PropTypes.array
};

function  mapStateToProps(state) {
  return {
    rooms: state.rooms
  };
}

export default connect(mapStateToProps)(ChannelContainer);