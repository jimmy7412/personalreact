import React, { Component } from 'react';
import {Col, Container, Jumbotron, Row} from 'reactstrap';
import './HeroStyle.css';
import {JobSearch} from "./JobSearch";

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <Container fluid>
                    <Jumbotron fluid>

                        <Row>
                            <Col><h1>James Pierce</h1></Col>
                        </Row>
                        <Row>
                            <Col><h4>Software Engineer</h4></Col>
                        </Row>
                        <Row>
                            <Col><h4>Experienced Intelligence Professional</h4></Col>
                        </Row>
                        <Row>
                            <Col><h4>Astronomer</h4></Col>
                        </Row>
                        <Row>
                            <Col><h4>Physicist</h4></Col>
                        </Row>
                        <Row>
                            <Col><h2>Looking for work!</h2></Col>
                        </Row>

                    </Jumbotron>
                </Container>
                <JobSearch />
            </div>
        )
    }
}