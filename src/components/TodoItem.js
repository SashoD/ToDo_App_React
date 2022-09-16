import React from "react"

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
        };
    }
    render() {
        return (
            <span><button id={this.state.id} todo-title={this.state.title}
                onClick={() => { this.props.changeTodo(this.state.title) }}><i className="fa-solid fa-check"></i></button>
                <button id={this.state.id}
                    onClick={() => { this.props.removeTodo(this.state.id) }}><i className="fa-solid fa-xmark"></i></button></span>
        );
    }



}
export default TodoItem