import React, {Component} from 'react';
import {Button} from 'reactstrap';

export class AProject extends Component {

    static displayName = AProject.name;

    render() {
        return(
            <div>
                <h2>{this.props.name}</h2>
                <h4>{this.props.whatIs}</h4>
                <p>Skills and Tools used: {this.props.skills}</p>
                <Button href={this.props.repo} color={this.props.color} target={'_blank'}>Repository</Button>
            </div>
        )
    }
}