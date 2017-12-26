import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
const ROOMS_PATH = '/rooms.json';

class DirectMessages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      isLoading: false,
      error: null
    };
  };

  handleClick() {
    console.log(this); // null
  };

  fetch_rooms() {
    fetch(ROOMS_PATH,
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
  };

  render() {
    const { rooms, isLoading, error } = this.state;
    var status = null;

    if (error) { status = <p>{error.message}</p>; }
    if (isLoading) { status = <p>Loading ...</p>; }

    const listRooms = rooms.map((room) =>
      <li key={room['id']} className={room['id']} onClick={this.handleClick}>
        {room['name']}
      </li>
    );

    return (
      <div className="Channels">
        <div className="clearfix title">Rooms <Button className="btn-info btn-circle float-right">+</Button></div>
        <ul className="">{listRooms}</ul>
        <div>{status}</div>
      </div>
    )
  }
}

export default DirectMessages;
