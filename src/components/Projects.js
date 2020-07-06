import React, {Component} from 'react';
import {AProject} from './AProject';
import {Container, Row, Col} from 'reactstrap';
import DL from './Deku_Loaf.jpg';
import EDW from './Emmett_Deku_Window.jpg';

export class Projects extends Component {
    render() {
        return(
            <div>
                <Container className={'mb-5'}>
                    <Row className={'mt-5'}>
                        <Col sm={'9'}>
                            <AProject name='Website'
                                      whatIs={'A website to show some of my accomplishments and updates'}
                                      skills={'HTML, JSX, CSS, Javascript, React, Bootstrap, Reactstrap'}
                                      repo={'https://github.com/jimmy7412/personalreact'}
                                      color={'danger'}/>
                        </Col>
                        <Col sm={'3'}><img className={'img-fluid'} src={DL} alt='CatLoaf'/></Col>
                    </Row>
                    <Row className={'mt-5'}>
                        <Col sm={'3'}><img className={'img-fluid'} src={EDW} alt='Excited Dog and Cat'/></Col>
                        <Col sm={'9'}>
                            <AProject name='Personal You Need A Budget Analyzer'
                                      whatIs={'Pulls in budget data and shows it in a simple format'}
                                      skills={'C#, .NET, ASP.NET, Blazor Pages, Linq. Earlier versions used: Python, NUMPY, PANDAS'}
                                      repo={'https://github.com/jimmy7412/MVCynab'}
                                      color={'danger'}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}