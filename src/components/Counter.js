import React from "react"

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const counter = this.props.todos.length
        return (

            <div className="total-todo">
                Total Tasks:<span className="space">{counter}</span>
            </div>
        );

    }
}
export default Counter