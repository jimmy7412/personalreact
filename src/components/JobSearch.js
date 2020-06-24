import React, {Component} from "react";
import {Container, Table} from 'reactstrap';

export class JobSearch extends Component {
    static displayName = JobSearch.name;

    render() {
        return(
            <div>
                <Container className={"justify-content-center"}>
                    <p>These are the counts of my job search, I'm still adding them from a trello board to a SQL Database, for easier searching.</p>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope={'row'}>Active</th>
                                <td>108</td>
                            </tr>
                            <tr>
                                <th scope={'row'}>Ghosted / Rejected (Greater than 100 days since last contact.)</th>
                                <td>9</td>
                            </tr>
                            <tr>
                                <th scope={'row'}>Rejected (Explicit Rejection)</th>
                                <td>9</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}