import React, {Component} from 'react';
import {Summary} from "./resumecomponents/Summary";
import {Skills} from "./resumecomponents/Skills";
import {Education} from "./resumecomponents/Education";
import {Experience} from "./resumecomponents/Experience";
import Container from "reactstrap/es/Container";

export class Resume extends Component {
    static displayName = Resume.name;

    render() {
        return (
            <div>
                <Container>
                    <h1>James Pierce</h1>
                    <Summary />
                    <Skills />
                    <Education />
                    <Experience />
                </Container>
            </div>
        );
    }
}