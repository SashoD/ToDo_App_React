import React from 'react';


class AddTodo extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    render() {
        return (
            <form>
                <input type="text"
                    autoFocus
                    placeholder="add new todo ..."
                    value={this.state.value}
                    onChange={(e) => { this.setState({ value: e.target.value }) }} />
                <button
                    className="btn"
                    id='btn'
                    onClick={(e) => {
                        this.props.addTodo(this.state.value)
                        this.setState({ value: "" })
                    }}
                    type="button">Add</button>
            </form>
        );
    }
}



export default AddTodo;

