import React, { Component } from "react";
import {Container} from 'reactstrap';

export class Education extends Component {
    static displayName = Education.name;

    render() {
        return(
            <div>
                <Container>
                    <h2 className={'text-center'}>Education</h2>
                    <h3>University of Washington</h3>
                    <h4>Bachelors of Science in Physics and Astronomy</h4>
                    <h5>2016 - 2019</h5>
                    <ul>
                        <li>Operated the telescope at the Manashtash Ridge Observatory, and collected data on variable stars.</li>
                        <li>Processed and analyzed the collected scientific data in a collaborative environment, using python and other analysis tools.</li>
                        <li>Frequently applied established processes to routine and complex problems to come up with detailed solution.</li>
                        <li>Completed multiple layered projects simultaneously for different stakeholders, in various fields of expertise.</li>
                    </ul>
                    <h3>Green River College</h3>
                    <h4>Transfer Credits</h4>
                    <h5>2014 - 2016</h5>
                    <ul>
                        <li>Completed general education courses in order to transfer to the University of Washington.</li>
                    </ul>
                </Container>
            </div>
        )
    }
}