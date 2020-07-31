import React, {Component} from 'react';
import {AProject} from './AProject';
import {LiveProject} from "./LiveProject";
import {Container, Row, Col} from 'reactstrap';
import DL from './Deku_Loaf.jpg';
import EDW from './Emmett_Deku_Window.jpg';
import SOC from './SomeOrangeCat.jpg';
import CC from './CheetahCamera.jpg';

export class Projects extends Component {
    render() {
        return(
            <div>
                <Container className={'mb-5'}>
                    <Row className={'mt-5'}>
                        <Col sm={'9'} className={'mt-5'}>
                            <LiveProject name='Website'
                                         whatIs={'A website to show some of my accomplishments and updates'}
                                         skills={'HTML, JSX, CSS, Javascript, React, Bootstrap, Reactstrap'}
                                         site={'jamespierce.news'}
                                         repo={'https://github.com/jimmy7412/personalreact'}
                                         color={'success'}/>
                        </Col>
                        <Col sm={'3'} className={'mt-5'}><img className={'img-fluid'} src={DL} alt='CatLoaf'/></Col>
                    </Row>
                    <Row className={'mt-5'}>
                        <Col sm={'3'} className={'mt-5'}><img className={'img-fluid'} src={SOC} alt='Some Cat'/></Col>
                        <Col sm={'9'} className={'mt-5'}>
                            <LiveProject name='Gatsby Site'
                                         whatIs={'A website that will display static stuff, it may become a personal news site/Blog, it is still under construction!'}
                                         skills={'HTML, JSX, CSS, Javascript, React, Bootstrap, Reactstrap, GatsbyJS'}
                                         site={'https://laughing-hamilton-8d6ef5.netlify.app/'}
                                         repo={'https://github.com/jimmy7412/SiteGatsby'}
                                         color={'success'}/>
                        </Col>
                    </Row>
                    <Row className={'mt-5'}>
                        <Col sm={'9'} className={'mt-5'}>
                            <AProject name='Job Tracking App'
                                      whatIs={'An ASP.NET MVC React app to keep track of all my job application rejections'}
                                      skills={'C#/.NET, ASP.NET, MVC, React, Linq, EFCore'}
                                      repo={'https://github.com/jimmy7412/personalreact'}
                                      color={'success'}/>
                        </Col>
                        <Col sm={'3'} className={'mt-5'}><img className={'img-fluid'} src={CC} alt='Curious Cheetah'/></Col>
                    </Row>
                    <Row className={'mt-5'}>
                        <Col sm={'3'} className={'mt-5'}><img className={'img-fluid'} src={EDW} alt='Excited Dog and Cat'/></Col>
                        <Col sm={'9'} className={'mt-5'}>
                            <AProject name='Personal You Need A Budget Analyzer (Private)'
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