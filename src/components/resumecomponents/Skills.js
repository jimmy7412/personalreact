import React, { Component } from "react";
import {Col, Row, Container} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCodeBranch, faUser, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import './skillStyle.css';

export class Skills extends Component {
    static displayName = Skills.name;

    render() {
        return(
            <div id={'skillset'}>
                <h2 className={'text-center'}>Skills</h2>
                <Container>
                    <Row className={'row justify-content-center'}>
                        <Col sm={{size:'4'}}>
                            <ul id={'skillSet'}>
                                <li id={'icon'}><FontAwesomeIcon icon={faCodeBranch} size={'3x'}/></li>
                                <li id={'listName'}><h4>Technical Skills</h4></li>
                                <li id={'listItem'}><p>Python: PANDAs, NUMPY, ASTROPY</p></li>
                                <li id={'listItem'}><p>HTML, CSS: Bootstrap, JavaScript: React</p></li>
                                <li id={'listItem'}><p>C#/.NET: ASP.NET, EFCore, Razor Pages, Linq</p></li>
                                <li id={'listItem'}><p>SQL: MySQL</p></li>
                                <li id={'listItem'}><p>GIT: GITHUB</p></li>
                                <li id={'listItem'}><p>Java, C++</p></li>
                            </ul>
                        </Col>
                        <Col sm={{size: '4'}}>
                            <ul id={'skillSet'}>
                                <li id={'icon'}><FontAwesomeIcon icon={faUser} size={'3x'}/></li>
                                <li id={'listName'}><h4>People Skills</h4></li>
                                <li id={'listItem'}><p>Lead small teams through many different environments, and situations to successfully accomplish the mission.</p></li>
                                <li id={'listItem'}><p>Great at solving problems both technical and social based on years of experience in the military.</p></li>
                            </ul>
                        </Col>
                        <Col sm={{size: '4'}}>
                            <ul id={'skillSet'}>
                                <li id={'icon'}><FontAwesomeIcon icon={faBriefcase} size={'3x'}/></li>
                                <li id={'listName'}><h4>Office Skills</h4></li>
                                <li id={'listItem'}><p>Experienced in Microsoft Office Suite, Google Docs, Sheets, and LaTeX.</p></li>
                                <li id={'listItem'}><p>Very well organized and I can keep multiple tasks and priorities in mind.</p></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}