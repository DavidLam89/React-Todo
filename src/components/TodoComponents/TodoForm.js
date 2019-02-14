import React from 'react';
const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.onChangeTodo}
        type="text"
        name="task"
        value={props.value}
        placeholder="add a task"
      />
      <button onClick={props.addTodo}>Add Task</button>
      <button onClick={props.clearCompleted}>Clear Completed Task</button>
    </form>
  );
};

export default TodoForm;
