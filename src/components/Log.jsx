import React from "react"
function Log({ log }) {
    return (
        <div>
            <table class="table table-dark table-striped-columns">
                <tbody>
                    <tr>
                        <th scope="row">{log.id}</th>
                        <th>{log.time_stamp}</th>
                        <th>{log.application_name}</th>
                        <th>{log.level}</th>
                        <th>{log.message}</th>
                        <th>{log.handled_by}</th>
                        <th>{log.handled_time}</th>
                        <th>{log.comment}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Log