import React, { Component } from 'react'
import Log from './Log'
class Table extends Component {
    render() {
        const logs = [{
            id: 0,
            time_stamp: '2022-09-30 06:51:19.595',
            application_name: 'SS',
            level: 'warning',
            message: 'Setting log level to info',
            handled_by: '----',
            handled_time: '----',
            comment: 'First log',
        }, {
            id: 1,
            time_stamp: '2022-01-21 8:11:39.400',
            application_name: 'SS',
            level: 'warning',
            message: 'Setting log level to info',
            handled_by: '----',
            handled_time: '----',
            comment: 'Second log',
        }, {
            id: 2,
            time_stamp: '2021-06-30 06:31:13.715',
            application_name: 'SS',
            level: 'info',
            message: 'Setting log level to info',
            handled_by: '----',
            handled_time: '----',
            comment: 'Third log',
        }];
        const logList = logs.map(log => <Log log={log} />)
   
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
                    {logList}
                </table>
                
            </div>
        )
    }
}

export default Table