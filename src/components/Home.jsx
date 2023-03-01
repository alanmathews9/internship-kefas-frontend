import React, { Component } from 'react'

class Table extends Component {
    render() {
        return (
            <div class='container'>
                <table class="table table-dark table-striped-columns">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">TIMESTAMP</th>
                            <th scope="col">APPLICATION_NAME</th>
                            <th scope="col">LEVEL</th>
                            <th scope="col">MESSAGE</th>
                            <th scope="col">HANDLED_BY</th>
                            <th scope="col">HANDLED_TIME</th>
                            <th scope="col">COMMENT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>2022-09-30 06:51:19.595</td>
                            <td>SS</td>
                            <td>info</td>
                            <td>Setting log level to info</td>
                            <td>----</td>
                            <td>----</td>
                            <td>First log</td>
                        </tr>
                    
                    
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table