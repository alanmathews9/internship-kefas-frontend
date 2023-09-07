import React, { Component } from "react";
import axios from "axios";
import "./styles.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      // loglist state to store all logs
      logList: [],
      comment: "",
    };
  }

  componentDidMount() {
    // component did mount function to get all logs and set interval to get logs every 10 seconds
    this.getLogs();
    this.interval = setInterval(() => this.getLogs(), 10000);
  }

  componentWillUnmount() {
    //  To clear interval
    clearInterval(this.interval);
  }

  //   handleComment = (e) => {
  //     this.setState({ comment: e.target.value });
  //   };

  // function to handle log takes log id as parameter
  handleLog = (e, log_id) => {
    e.preventDefault();
    const handleLog = {
      session_id: localStorage.getItem("session_id"),
      log_id: log_id,
      comment: this.state.comment,
    };
    axios
      .post("http://127.0.0.1:8000/handle_log/", handleLog) // session id, log id and comment is passed to handle log
      .then((response) => {
        console.log(response.data);
        if (response.data.status !== "failure") {
          this.setState({ comment: "" }); // set comment state to empty string
          this.getLogs(); // call getLogs function to get all logs
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // function to get all logs
  getLogs = () => {
    const data = { session_id: localStorage.getItem("session_id") };
    axios
      .post("http://127.0.0.1:8000/get_all_logs/", data) // pass session id to get all logs
      .then((response) => {
        console.log(response.data);
        if (response.data.status !== "failure") {
          this.setState({
            logList: response.data.logs, // set logList state to logs
          });
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { logList } = this.state;
    if (!localStorage.getItem("session_id")) {
      // if session id is not present in local storage redirect to login page
      window.location.href = "/";
    } else {
      // if session id is present in local storage show logs
      return (
        <div className="table-responsive my-2">
          <table className="table-container table table-hover ">
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
              {this.state.logList.length < 1 ? (        // if no logs found
                <tr className="text-dark" colSpan="8">
                  NO LOGS FOUND
                </tr>
              ) : (
                // if logs found
                this.state.logList.map(
                  (
                    log                                 // map through logs and show them
                  ) => (
                    <tr key={log.id}>
                      <td scope="row">{log.id}</td>
                      <td>{log.timestamp}</td>
                      <td>{log.application_name}</td>
                      <td>{log.level}</td>
                      <td>{log.message}</td>
                      <td>
                        {log.handled_by === null ? (    // if log is not handled by anyone show handle button
                          <div>
                            <button
                              type="button"
                              className="btn btn-sm btn-dark comment "
                              onClick={(e) => this.handleLog(e, log.id)} // pass log id to handleLog function
                            >
                              handle yourself
                            </button>
                            {/* <br />
                          <input
                            type="text"
                            placeholder="Comment"
                            className="comment"
                            value={this.state.comment}
                            onChange={this.handleComment}
                          /> */}
                          </div>
                        ) : (
                          log.handled_by // if log is handled by someone show his email
                        )}
                      </td>
                      <td>{log.handled_time}</td>
                      <td>{log.comment}</td>
                    </tr>
                  )
                )
              )}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Home;
