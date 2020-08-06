import React, { Component } from "react";
import {Container} from 'reactstrap';

export class Experience extends Component {
    static displayName = Experience.name;

    render() {
        return(
            <div>
                <Container>
                    <h2 className={'text-center'}>Experience</h2>
                    <h3>Self-Employed</h3>
                    <h4>Software Engineer</h4>
                    <h5>2019 - Present</h5>
                    <ul>
                        <li>Crafting software solutions using data and applicable tools.</li>
                        <li>Expanding my toolset by learning new languages and frameworks.</li>
                        <li>Building projects to solve problems and streamline workflows in everyday situations.</li>
                    </ul>
                    <h3>U.S. Census</h3>
                    <h4>Enumerator</h4>
                    <h5>2020 - Present (Temporary)</h5>
                    <ul>
                        <li>Count people to ensure the accurate representation of persons in the United States, and the adequate distribution of resources.</li>
                    </ul>
                    <h3>Quality Food Centers</h3>
                    <h4>E-Commerce Clerk</h4>
                    <h5>2020 - Present</h5>
                    <ul>
                        <li>Delivering orders to customers.</li>
                        <li>Filling orders for online customers in the store.</li>
                        <li>Filling in other departments as needed.</li>
                    </ul>
                    <h3>US Army</h3>
                    <h4>35N Signals Intelligence Analyst</h4>
                    <h5>2008 - 2017</h5>
                    <ul>
                        <li>Lead mission oriented teams of about 5 - 10 people, while maintaining an open communicative environment for intra and inter group relations.</li>
                        <li>Entrusted with the care and maintenance $250,000 worth of equipment.</li>
                        <li>Deployed to Afghanistan where I performed Low Level Voice Intercept, in aid of strategic military operations.</li>
                        <li>Processed, analyzed and disseminated information regularly to maintain mission readiness.</li>
                        <li>Held a Top Secret / SCI security clearance.</li>
                    </ul>
                    <h3>Regal Theatres</h3>
                    <h4>Team Member</h4>
                    <h5>2007 - 2008</h5>
                    <ul>
                        <li>Successfully performed all tasks while completing High School.</li>
                        <li>Functioned in multiple roles to ensure great customer service.</li>
                        <li>Worked under pressure to accomplish tasks in tight time constraints.</li>
                    </ul>
                    <h3>Emerald Downs Race Track</h3>
                    <h4>Busser</h4>
                    <h5>2007</h5>
                    <ul>
                        <li>Had to fill many orders at the same time while prioritizing and processing orders simultaneously.</li>
                    </ul>
                </Container>
            </div>
        )
    }
}