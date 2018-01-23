import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Landing from '../landing/Landing';
import Bio from '../Bio';
require('./body.css');

class Body extends Component {
    render() {
        return (
            <div className="body">
                <Landing />
                <Container>
                    <Bio />
                </Container>
            </div>
        );
    }
}

export default Body;
