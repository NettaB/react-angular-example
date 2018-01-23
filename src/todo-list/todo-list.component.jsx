import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './todo-item.component.jsx';

class ReactTodoList extends React.Component {
    constructor(props) {
        super(props);
        this.markTaskDone = this.markTaskDone.bind(this);
    }

    markTaskDone(id) {
        this.props.TodoListService.markTaskDone(id);
        this.setState({tasks: this.props.TodoListService.tasks});
    }

    createTaskList(tasks) {
        let taskList = [];
        for (let task in tasks) {
            if (tasks.hasOwnProperty(task)) {
                taskList.push (<TodoItem
                    key={tasks[task].id}
                    id={tasks[task].id}
                    title={tasks[task].title}
                    content={tasks[task].content}
                    isDone={tasks[task].isDone}
                    markTaskDone={this.markTaskDone}/>);
            }

        }
        return taskList;
    }

    render() {
        return (
            <div className="todo-list">
                <h2 className="todo-list_title">React Todo List</h2>
                <ul>
                    {this.createTaskList(this.props.tasks)}
                </ul>
            </div>)
    }
}

const mapStateToProps = (state) => {
  return {tasks: state}
};

export default connect(mapStateToProps)(ReactTodoList);