import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
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