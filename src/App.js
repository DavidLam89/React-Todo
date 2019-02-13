import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
      ],
      task: ''
    };
  }

  addTodo = e => {
    e.preventDefault();
    const todos = this.state.todos;
    todos.push({ task: this.state.task, completed: false, id: Date.now() });
    this.setState({ todos, task: '' });
  };

  onChangeTodo = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.task}
          onChangeTodo={this.onChangeTodo}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;