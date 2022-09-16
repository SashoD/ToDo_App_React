
import './style.css';
import React from 'react';
import Header from './components/Header';
import AddTodo from './components/AddToDo';
import ListTodos from './components/TodoList';

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
        // todos = data;
        this.setState({ todos: data })
      })
      .catch(err => console.warn(err));
  }

  addTodo = (title) => {
    console.log(`addtodo`);
    const newTodo = {
      id: this.state.todos.length + 1,
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

    this.setState({
      todos: [...this.state.todos, newTodo]

    })


    console.dir(`newTodo: ${newTodo}`);
  }

  removeTodo = (todo) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== todo
    });
    fetch(`${url}/${todo}`, {
      method: 'DELETE',
    }).then(() => {
      this.setState({ todos });
    })

    console.log(todos);
  }

  changeTodo = (title, todo) => {
  };



  render() {
    return (
      <div className="page">
        <Header />
        <main className="todo-app">
          <AddTodo addTodo={this.addTodo} />
          <ListTodos todos={this.state.todos}
            changeTodo={this.changeTodo}
            removeTodo={this.removeTodo} />
        </main>
      </div>
    );
  }
}
export default App
