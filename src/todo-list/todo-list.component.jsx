import React from 'react';
import TodoItem from './todo-item.component.jsx';

class ReactTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tasks: {}};
    this.markTaskDone = this.markTaskDone.bind(this);
  }

  componentWillMount() {
    this.props.TodoListService.getTasks().then(() => {
      this.setState({tasks: this.props.TodoListService.tasks});
    })
  }

  markTaskDone(id) {
    this.props.TodoListService.toggleTaskDone(id);
    this.setState({tasks: this.props.TodoListService.tasks});
  }

  createTaskList(tasks) {
    let taskList = [];
    for (let task in tasks) {
      if (tasks.hasOwnProperty(task)) {
        taskList.push(<TodoItem
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
        <h3 className="todo-list_title">React Todo List</h3>
        <ul>
          {this.createTaskList(this.state.tasks)}
        </ul>
      </div>)
  }
}

export default ReactTodoList;