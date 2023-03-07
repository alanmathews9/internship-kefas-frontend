import React, { Component } from 'react'
import axios from 'axios'


class Table extends Component {
    constructor() {
        super()
    
        this.state = {
            logList:[],
        }
    }
    componentDidMount() {
        this.getLogs();
    }
    getLogs() { 
        axios.get('http://127.0.0.1:8000/get_all_logs/')
            .then(response => { 
                this.setState({
                    logList: response.data,
                });
            })
            .catch(error => {
                this.setState({
                    logList: [],
                });
            })
    }
    render() {
        const {logList} = this.state;
        return (
            <div>
                <table className="table table-dark table-striped-columns">
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
                                <tr className="text-dark" colSpan ="8">NO LOGS FOUND</tr>
                        ):
                        (
                            this.state.logList.map((log) => (
                                <tr key={log.id}>
                                        <td scope="row">{log.id}</td>
                                        <td>{log.timestamp}</td>
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