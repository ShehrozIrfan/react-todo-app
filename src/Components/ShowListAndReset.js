import React from 'react';

function ShowListAndReset(props) {
  return (
    <div>
      <p>You have {props.todoList.length} pending tasks</p>
      <button type="button" onClick={props.handleReset}>
        Clear All
      </button>
    </div>
  );
}

export default ShowListAndReset;
