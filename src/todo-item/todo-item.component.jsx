import React from 'react';

class TodoItem extends React.Component {
    Constructor() {
        this.dynamicClass = this.props.isDone? 'done': '';
    }
    render() {
        return (
            <li className={this.dynamicClass}>
                <h3>{this.props.title}</h3>
                <h5>{this.props.content}</h5>
            </li>
        )
    }
}

export default TodoItem