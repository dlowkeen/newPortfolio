import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Header from '../common/Header';
import Landing from './landing/Landing';
import Bio from './Bio';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import SectionHead from "../common/SectionHead";
require('./body.css');

class Body extends Component {
    render() {
        return (
            <div className="body">
                <Header />
                <Landing />
                <Container>
                    <SectionHead name="Bio" />
                    <Bio />
                </Container>
                    <SectionHead name="Skills" />
                    <Skills />
                <Container>
                    <SectionHead name="Projects" />
                    <Projects />
                </Container>
            </div>
        );
    }
}

export default Body;
