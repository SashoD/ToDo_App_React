import React from "react";
import TodoItem from "./TodoItem";

class ListTodos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <ul className="todos">
                    {this.props.todos.map(todo =>
                        <li dataid={todo.id} key={todo.id}>
                            <span style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                            }}>{todo.title}</span>
                            <TodoItem {...todo} removeTodo={this.props.removeTodo} changeTodo={this.props.changeTodo} />
                        </li>)}
                </ul>
            </div >
        );
    }
}


// function ListTodos({ todos }) {
//     return (
//         <div className="container">
//             <ul className="todos">
//                 {todos.map(todo => <li dataid={todo.id} key={todo.id}>
//                     <span style={{
//                         textDecoration: todo.completed ? "line-through" : "none",
//                     }}>{todo.title}</span>
//                     <span><button id={todo.id} todo-title={todo.title} onClick={this.changeTodo}><i className="fa-solid fa-check"></i></button>
//                         <button id={todo.id} ><i className="fa-solid fa-xmark"></i></button></span>
//                 </li>)}
//             </ul>
//         </div >
//     );
// }



// onClick={() => changeTodo(todo.id, todo.title)}


export default ListTodos;