import React, { Component } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import '../Components/style.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todoList: [],
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({
      inputValue: '',
      todoList: [...this.state.todoList, this.state.inputValue],
    });
  }

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  handleDelete(index) {
    const newArr = this.state.todoList;
    newArr.splice(index, 1);
    this.setState({
      todoList: newArr,
    });
  }

  handleReset() {
    this.setState({
      todoList: [],
    });
  }

  render() {
    return (
      <div className="app-wrap">
        <div class="app-wrap-inside">
          <h3 className="app-heading">Todo App</h3>
          <form onSubmit={this.handleFormSubmit}>
            <input
              type="text"
              placeholder="Add your new todo"
              onChange={this.handleInputChange}
              value={this.state.inputValue}
              className="todo-input"
              required
            />
            <button type="submit" className="todo-add-btn">
              <AiOutlinePlusCircle size={14} />
            </button>
          </form>
          <div>
            {this.state.todoList.map((list, index) => (
              <div key={index}>
                {list}
                <button
                  type="button"
                  onClick={this.handleDelete.bind(this, index)}
                >
                  <MdOutlineDeleteOutline />
                </button>
              </div>
            ))}
          </div>
          <div>
            <p>You have {this.state.todoList.length} pending tasks</p>
            <button type="button" onClick={this.handleReset}>
              Clear All
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
