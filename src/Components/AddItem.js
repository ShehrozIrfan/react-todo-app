import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

function AddItem(props) {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <input
        type="text"
        placeholder="Add your new todo"
        onChange={props.handleInputChange}
        value={props.inputValue}
        className="todo-input"
        required
      />
      <button type="submit" className="todo-add-btn">
        <AiOutlinePlusCircle size={14} />
      </button>
    </form>
  );
}

export default AddItem;
