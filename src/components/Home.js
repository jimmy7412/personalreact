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
                            <Col><h2>Looking for a Career!</h2></Col>
                        </Row>

                    </Jumbotron>
                </Container>
                <Container>
                    <h5 className={'text-center'}>I'm building a new site out of Gatsby! I don't know when it'll be done but the page should look the same but it will be easier to add content and build out.</h5>
                </Container>
                <JobSearch />
            </div>
        )
    }
}