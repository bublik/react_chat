import React, {Component} from 'react';
import {Navbar, Jumbotron, Button, Scrollspy} from 'react-bootstrap';

class Container extends Component {
    render() {
        return (
            <div className="col-9 Container">
                <div>Chanel Name</div>
                <div>
                    Messages list
                    Container text
                    <Button className="btn-danger">Danger</Button>
                    <Button className="btn-info">Info</Button>
                </div>
            </div>
        )
    }
}

export default Container;
