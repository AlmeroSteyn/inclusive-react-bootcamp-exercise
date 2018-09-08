import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTasks } from './data/tasks';

class Tasks extends Component {
  state = {
    tasks: [],
    liveMessage: 'Tasks page loading.',
    isLoading: true
  };

  componentDidMount() {
    getTasks().then(tasks => {
      this.setState({ tasks });
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <h4>Tasks</h4>
        <div className="row">
          <div className="col-xs-12">
            <ul>
              {tasks.map(task => (
                <li key={task.id}>{`${task.name} - ${task.description}`}</li>
              ))}
            </ul>
          </div>
          <div className="col-xs-12">
            <Link className="pull-right" to="/task">
              Add new task
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
