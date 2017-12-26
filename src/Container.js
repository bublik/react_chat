import React, {Component} from 'react';
import {Button, Scrollspy} from 'react-bootstrap'; //Navbar, Jumbotron,

class Container extends Component {
    render() {
        return (
            <div className="col-9 Container">
                <div>Chanel Name [TODO]</div>
                <div>
                    Container text
                    <Button className="btn-danger">Danger</Button>
                    <Button className="btn-info">Info</Button>
                </div>
            </div>
        )
    }
}

export default Container;
