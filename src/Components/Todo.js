import React, { Component, useState } from 'react';
import '../Components/style.css';
import AddItem from './AddItem';
import DeleteItem from './DeleteItem';
import ShowListAndReset from './ShowListAndReset';

function Todo() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  function handleFormSubmit(event) {
    event.preventDefault();
    setInputValue((inputValue = ''));
    setTodoList((todoList = [...this.state.todoList, this.state.inputValue]));
  }

  function handleInputChange(event) {
    setInputValue((inputValue = event.target.value));
  }

  function handleDelete(index) {
    const newArr = this.state.todoList;
    newArr.splice(index, 1);
    setTodoList((todoList = newArr));
  }

  function handleReset() {
    setTodoList((todoList = []));
  }

  return (
    <div className="app-wrap">
      <div className="app-wrap-inside">
        <h3 className="app-heading">Todo App</h3>
        <AddItem
          inputValue={inputValue}
          handleFormSubmit={() => handleFormSubmit()}
          handleInputChange={() => handleInputChange()}
        />
        <DeleteItem todoList={todoList} handleDelete={() => handleDelete()} />
        <ShowListAndReset
          todoList={todoList}
          handleReset={() => handleReset()}
        />
      </div>
    </div>
  );
}

export default Todo;
