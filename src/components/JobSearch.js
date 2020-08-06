import React, {Component} from "react";
import {Container, Table} from 'reactstrap';

export class JobSearch extends Component {
    static displayName = JobSearch.name;

    render() {
        return(
            <div>
                <Container className={"justify-content-center"}>
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
                                <td>291</td>
                            </tr>
                            <tr>
                                <th scope={'row'}>Ghosted / Rejected (Greater than 100 days since last contact.)</th>
                                <td>35</td>
                            </tr>
                            <tr>
                                <th scope={'row'}>Rejected (Explicit Rejection)</th>
                                <td>72</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}