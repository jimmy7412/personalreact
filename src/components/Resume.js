import React, {Component} from 'react';
import {Summary} from "./resumecomponents/Summary";
import {Skills} from "./resumecomponents/Skills";
import {Education} from "./resumecomponents/Education";
import {Experience} from "./resumecomponents/Experience";

export class Resume extends Component {
    static displayName = Resume.name;

    render() {
        return (
            <div>
                <h1>James Pierce</h1>
                <Summary />
                <Skills />
                <Education />
                <Experience />
                <h1>This took way to long</h1>
            </div>
        );
    }
}