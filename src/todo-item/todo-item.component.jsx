import React from 'react';

class TodoItem extends React.Component {
    componentWillMount() {
        this.dynamicClass = this.props.isDone? 'done': '';
    }

    componentWillUpdate(newProps) {
        console.log(newProps);
    }

    markTaskDone() {
        this.props.TodoListService.markTaskDone(this.props.id);
    };

    render() {
        return (
            <li className={this.props.isDone? 'done': ''} onClick={this.markTaskDone.bind(this)}>
                <h5><b>{this.props.title}</b> -- {this.props.content}</h5>
            </li>
        )
    }
}

export default TodoItem