import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
      ],
      task: '',
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

  taskClicked = id => {
    let todos = this.state.todos;
    todos = todos.map(element => {
      if (element.id === id) {
      element.completed = !element.completed;
      return element;
      }
      else return element;
    });
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          taskClicked = {this.taskClicked}
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