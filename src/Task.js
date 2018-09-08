import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addTask } from './data/tasks';

class Task extends Component {
  state = {
    showErrors: false,
    isSaving: false
  };

  onSubmitHandler = e => {
    const { taskName, taskDescription } = this.state;
    const canSubmit = !!taskName && !!taskDescription;

    e.preventDefault();
    this.setState({ showErrors: true });

    if (canSubmit) {
      addTask({ taskName, taskDescription }).then(() => {
        this.props.history.replace('/tasks');
      });
    }
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>Add new task</h2>
        <form
          className="form-horizontal"
          noValidate="noValidate"
          onSubmit={this.onSubmitHandler}
        >
          <label>Name</label>
          <input
            onChange={this.onChangeHandler}
            name="taskName"
            value={this.state['taskName']}
            className="form-control"
          />
          <label>Name</label>
          <input
            onChange={this.onChangeHandler}
            name="taskDescription"
            value={this.state['taskDescription']}
            className="form-control"
          />
          <div className="pull-right">
            <Link to="/tasks">Cancel and go back</Link>
            <button className="btn btn-primary" type="submit">
              Add task
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Task;
