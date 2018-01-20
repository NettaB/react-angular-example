import React from 'react';
import TodoItem from './todo-item.component.jsx';

import ActionCreators from './todo-list.actions';

class ReactTodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: props.store
        };
        // this.unsubscribe = this.props.$ngRedux.connect(this.mapStateToProps, ActionCreators)(this);
        this.markTaskDone = this.markTaskDone.bind(this);
    }

    mapStateToProps(state){
        console.log('hai', state);
        return {
            tasks: state
        }
    }

    componentWillMount() {
        // this.setState({tasks: this.props.TodoListService.tasks})
        //const newState = this.props.$ngRedux.getState();
    }

    componentWillUpdate(newProps) {
        console.log('update!', newProps);
    }

    markTaskDone(id) {
        this.props.TodoListService.markTaskDone(id);
        this.setState({tasks: this.props.TodoListService.tasks});
    }

    createTaskList(tasks) {
        console.log('newtasks', tasks);
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
                    {this.createTaskList(this.state.tasks)}
                </ul>
            </div>)
    }
}

export default ReactTodoList;