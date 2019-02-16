import React from 'react';

const Todo = props => {
  return (
    <div className='todo' style={props.task.completed ? {textDecoration: 'line-through'} : null} onClick={() => props.taskClicked(props.task.id)}>
      • {props.task.task}
    </div>
  );
};

export default Todo;