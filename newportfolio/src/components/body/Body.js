import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Landing from './landing/Landing';
import Bio from './Bio';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Photography from './Photography';
require('./body.css');

class Body extends Component {
    render() {
        return (
            <div className="body">
                <Landing />
                <Container>
                    <Bio />
                    <Skills />
                    <Projects />
                    <Photography />
                </Container>
            </div>
        );
    }
}

export default Body;
