import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => {
  return (
    <div className='list'>
      {props.todos.map(element => (
        <Todo
          task={element}
          taskClicked={props.taskClicked}
        />
      ))}
    </div>
  );
};

export default TodoList;