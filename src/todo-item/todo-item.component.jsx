import React from 'react';

class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.markTaskDone = this.markTaskDone.bind(this);
    }

    markTaskDone() {
        this.props.markTaskDone(this.props.task.id);
    };

    render() {
        return (
            <li className={this.props.task.isDone ? 'done': ''}
                onClick={this.markTaskDone}>
                <h5><b>{this.props.task.title}</b> -- {this.props.task.content}</h5>
            </li>
        )
    }
}

export default TodoItem
