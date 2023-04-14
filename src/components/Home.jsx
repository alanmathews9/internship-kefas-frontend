import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
    constructor() {
        super()
    
        this.state = {
            logList:[],
        }
    }



    handleLog = (event, log_id) => {
      event.preventDefault();
      const email_id = localStorage.getItem("email_id");
      const current_time = new Date().toLocaleString();
      axios
        .post(`/api/logs/${log_id}/handle/`, {
          handled_by: email_id,
          handled_time: current_time,
        }, {
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken"),
          },
        })
        .then((response) => {
          if (response.data.status === "success") {
            const logs = this.state.logs.map((log) => {
              if (log.id === log_id) {
                return {
                  ...log,
                  handled_by: email_id,
                  handled_time: current_time,
                };
              } else {
                return log;
              }
            });
            this.setState({ logs });
          } else {
            console.log("Error handling log:", response.data.message);
          }
        })
        .catch((error) => console.error("Error handling log:", error));
    };
    componentDidMount() {
        this.getLogs();
    }

    getLogs = () => { 
        const data = {session_id: localStorage.getItem("session_id")}
        axios.post('http://127.0.0.1:8000/get_all_logs/', data)
            .then(response => {
                console.log(response.data)
                if (response.data.status !== "failure") {
                    this.setState({
                        logList: response.data.logs,
                    });
                }
                else { 
                    console.log(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const { logList } = this.state;
        if (!localStorage.getItem("session_id")) {
            window.location.href = "/";
        }
        else {
            return (
                <div className="table-responsive my-2">
                    <table className="table table-hover ">
                        <thead className="table-secondary">
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
                                    <tr className="text-dark" colSpan="8">NO LOGS FOUND</tr>
                                ) :
                                (
                                    this.state.logList.map((log) => (
                                        <tr key={log.id}>
                                            <td scope="row">{log.id}</td>
                                            <td>{log.timestamp}</td>
                                            <td>{log.application_name}</td>
                                            <td>{log.level}</td>
                                            <td>{log.message}</td>
                                            <td>
                                                {/* {item.handled_by === null ? ( */}
                                                    <button
                                                        type="button"
                                                        className="btn btm-sm btn-link"
                                                        // onClick={(event) => this.handleLog(event, item.id)}      
                                                    >  
                                                        handle yourself                                                      
                                                    </button>                                                                          
                                               {/* ) : (                                                   */}
                                                         {/* item.handled_by                                                      */}
                                                 {/* )}                                                    */}
                                            </td>                                            
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
}

export default Home