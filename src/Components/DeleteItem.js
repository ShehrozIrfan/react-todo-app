import React from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md';

function DeleteItem(props) {
  return (
    <div>
      {props.todoList.map((list, index) => (
        <div key={index}>
          {list}
          <button type="button" onClick={props.handleDelete(index)}>
            <MdOutlineDeleteOutline />
          </button>
        </div>
      ))}
    </div>
  );
}

export default DeleteItem;
