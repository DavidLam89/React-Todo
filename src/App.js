import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

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

  clearCompleted = e => {
    e.preventDefault();
    let todos = this.state.todos;
    todos = todos.filter(element => !element.completed
    );
    console.log(todos);
    this.setState({ todos });
    console.log(this.state.todos);
  };

  render() {
    return (
      <div className='container'>
        <TodoForm
          value={this.state.task}
          onChangeTodo={this.onChangeTodo}
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
        <TodoList
          todos={this.state.todos}
          taskClicked = {this.taskClicked}
        />
      </div>
    );
  }
}

export default App;