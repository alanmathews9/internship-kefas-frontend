import React, { Component } from 'react'

class Table extends Component {
    constructor() {
        super()
    
        this.state = {
            logList: []
        }
    }
    render() {
        
   
        return (
            <div>
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
                        
                        {this.state.logList.length < 1 ? 
                            (
                                <tr className = "text-dark" colSpan = "8">NO LOGS FOUND</tr>
                        ):
                        (
                            this.state.logList.map((log) => (
                                <tr>
                                        <td scope="row">{log.id}</td>
                                        <td>{log.time_stamp}</td>
                                        <td>{log.application_name}</td>
                                        <td>{log.level}</td>
                                        <td>{log.message}</td>
                                        <td>{log.handled_by}</td>
                                        <td>{log.handled_time}</td>
                                        <td>{log.comment}</td>
                                </tr>
                            ))
                            
                        )
                        }
                        
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default Table