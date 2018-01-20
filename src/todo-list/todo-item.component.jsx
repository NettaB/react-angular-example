import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.markTaskDone(this.props.id);
    };
    calculateClass() {
        let conditionalClass = this.props.isDone ? 'done ' : '';
        if (this.props.id % 2 === 0) {
            conditionalClass += 'even';
        }
        return conditionalClass;
    }
    render() {
        return (
            <li className={this.calculateClass()} onClick={this.handleClick}>
                <h5><b>{this.props.title}</b> -- {this.props.content}</h5>
            </li>
        )
    }
}

export default TodoItem