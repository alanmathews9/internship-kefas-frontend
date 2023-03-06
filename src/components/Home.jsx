import React, { Component } from 'react'
import axios from 'axios'


class Table extends Component {
    
    getLogs() { 
        
        axios.get('http://127.0.0.1:8000/get_all_logs/')
            .then(response => { 
                console.log(response);
                
            })
    }
    constructor() {
        super()
    
        this.state = {
            logList:[],
        }
    }
    render() {
        return (
            <div>
                <table className="table table-dark table-striped-columns">
                    <thead>
                        <tr>
                            <td scope="col">ID</td>
                            <td scope="col">TIMESTAMP</td>
                            <td scope="col">APPLICATION_NAME</td>
                            <td scope="col">LEVEL</td>
                            <td scope="col">MESSAGE</td>
                            <td scope="col">HANDLED_BY</td>
                            <td scope="col">HANDLED_TIME</td>
                            <td scope="col">COMMENT</td>
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