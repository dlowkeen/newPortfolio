import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Header from '../common/Header';
import Landing from './landing/Landing';
import Bio from './Bio';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import PhotographyPage from './photography/PhotographyPage';
import Footer from '../common/Footer';
require('./body.css');

class Body extends Component {
    render() {
        return (
            <div className="body">
                <Header />
                <Landing />
                <Container>
                    <Bio />
                </Container>
                <Skills />
                <Container>
                    <Projects />
                </Container>
                <PhotographyPage />
                <Footer />
            </div>
        );
    }
}

export default Body;
