import React, {Component} from 'react';
//import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';

const USERS_PATH = '/users.json';

class DirectMessages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: false,
      error: null
    };
  };

  handleClick() {
    console.log(this); // null
  }

  fetch_users() {
    fetch(USERS_PATH,
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
      .then(data => this.setState({users: data, isLoading: false}))
      .catch(error => this.setState({error, isLoading: false}));
  };
  componentDidMount() {
    this.setState({isLoading: true});
    this.fetch_users();
  };

  render() {
    const { users, isLoading, error } = this.state;
    var status = null;

    if (error) { status = <p>{error.message}</p>; }
    if (isLoading) { status = <p>Loading ...</p>; }

    const listUsers = users.map((user) =>
      <li key={user['id']} className={user['id']} onClick={this.handleClick}>
        {user['name']}
      </li>
    );

    return (
      <div className="DirectMessages">
        <div className="clearfix title">Direct messages <Button className="btn-info btn-circle float-right">+</Button></div>
        <ul className="">{listUsers}</ul>
        <div>{status}</div>
      </div>
    )
  }
}

export default DirectMessages;
