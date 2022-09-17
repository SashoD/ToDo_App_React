import './style.css';
import React from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const url = ' http://localhost:8000/todos'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
  }

  componentDidMount() {
    // fetch initial todos

    fetch(url)
      .then(r => {
        if (r.ok) {
          return r.json()
        }
      })

      .then(data => {
        this.setState({ todos: data })
        console.log(`result of 1st fetch ${data}`);
      })
      .catch(err => console.warn(err));
  }

  addTodo = (title) => {
    const newTodo = {
      title: title,
      completed: false,
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(r => {
        if (r.ok) {
          return r.json()
        }
      })
      .then(todo => {
        this.setState({
          todos: [...this.state.todos, todo]
        })
        console.dir(`added todo after addtodo ${todo}`);
      })



    console.dir(`newTodo: ${newTodo}`);
  }

  removeTodo = (todoId) => {
    console.log(todoId);
    fetch(`${url}/${todoId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          this.setState({
            todos: [...this.state.todos.filter(({ id }) => id !== todoId)]
          });
        } else {
          console.error("Server returned an error code.");
        }
      })
      .catch(e => {
        console.error("Something went wrong while trying to send a DELETE request to the server.");
      });
  }

  changeTodo = (todoId) => {
    const checkedToDo = this.state.todos.find(({ id }) => id === todoId);
    fetch(`${url}/${todoId}`, {
      method: 'PUT',
      body: JSON.stringify({ ...checkedToDo, completed: true }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((response) => {
        if (response.ok) {
          this.setState({
            todos: [...this.state.todos.map(todo => ({ ...todo, completed: todo.id === todoId ? true : todo.completed }))]
          });
        } else {
          console.error("Server returned an error code.");
        }
      })
      .catch(e => {
        console.error("Something went wrong while trying to send a DELETE request to the server.");
      });
  };


  render() {
    return (
      <div className="page">
        <Header />
        <main className="todo-app">
          <AddTodo addTodo={this.addTodo} />
          <TodoList todos={this.state.todos}
            changeTodo={this.changeTodo}
            removeTodo={this.removeTodo} />
        </main>
      </div>
    );
  }
}
export default App