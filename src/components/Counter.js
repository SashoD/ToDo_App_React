import React from "react"

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.setState
        };
    }

    render() {
        const countTotal = this.props.length
        return (

            <div className="total-tasks">
                Total Tasks: <span>{countTotal}</span>
            </div>
        );

    }
}
export default Counter