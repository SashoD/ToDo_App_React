import React from "react"

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <span><button id={this.props.id} todo-title={this.props.title}
                onClick={() => { this.props.changeTodo(this.props.id) }}><i className="fa-solid fa-check"></i></button>
                <button key={this.props.id}
                    onClick={() => { this.props.removeTodo(this.props.id) }}><i className="fa-solid fa-xmark"></i></button></span >
        );
    }



}
export default TodoItem