import React, {Component} from 'react';

class ChannelComponent extends Component {
  render() {
    const {
      actionCreators,
      rooms
    } = this.props;

    const listRooms = rooms.map((room) =>
      <li key={room.id} className={room.id} onClick={actionCreators.loadMessages.bind(this, room.id)}>
        {room.name}
      </li>
    );

    return (<ul className="">{listRooms}</ul>)
  }
}

export default ChannelComponent;
