import React from 'react';

class TodoItem extends React.Component {
    componentWillMount() {
        this.dynamicClass = this.props.isDone? 'done': '';
    }

    markTaskDone() {
        console.log(this);
        this.props.TodoListService.markTaskDone(this.props.id);
    };

    render() {
        return (
            <li className={this.dynamicClass} onClick={this.markTaskDone.bind(this)}>
                <h5><b>{this.props.title}</b> -- {this.props.content}</h5>
            </li>
        )
    }
}

export default TodoItem