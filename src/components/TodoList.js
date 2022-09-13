import React from "react";
import TodoItem from "./TodoItem";


function ListTodos({ todos }) {
    return (
        <div className="container">
            <ul className="todos">
                {todos.map(todo => <li dataid={todo.id} key={todo.id}>
                    <span>{todo.title}</span>
                    <span><button id={todo.id} todo-title={todo.title} ><i className="fa-solid fa-check"></i></button>
                        <button id={todo.id} ><i className="fa-solid fa-xmark"></i></button></span>
                </li>)}
            </ul>
        </div>
    );
}

{/* <div className="container">
            <ul className="todos">
                {todos.map(todo => <li dataid={todo.id} key={todo.id}>
                    <span style={todo.completed ? 'text-decoration: line-through' : ''}>{todo.title}</span>
                    <span><button id={todo.id} todo-title={todo.title} onClick={this.completeTodo}><i className="fa-solid fa-check"></i></button>
                        <button id={todo.id} onClick={this.delTodos}><i className="fa-solid fa-xmark"></i></button></span>
                </li>)}
            </ul>
        </div> */}


export default ListTodos