import React, {Component} from 'react';
import {Button} from 'reactstrap';

export class LiveProject extends Component {

    static displayName = LiveProject.name;

    render() {
        return(
            <div>
                <h2>{this.props.name}</h2>
                <h4>{this.props.whatIs}</h4>
                <p>Skills and Tools used: {this.props.skills}</p>
                <Button className={'mr-3'} href={this.props.site} color={this.props.color} target={'_blank'}>Live Site</Button>
                <Button href={this.props.repo} color={this.props.color} target={'_blank'}>Repository</Button>
            </div>
        )
    }
}