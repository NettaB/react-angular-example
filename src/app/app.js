import angular from 'angular';
import { react2angular } from 'react2angular';

import '../style/app.css';
import TodoListService from '../todo-list/todo-list.service';
import TodoListComponent from '../todo-list/todo-list.component';
import TodoItem from '../todo-item/todo-item.component.jsx';
import AngularTodoItemComponent from '../todo-item/angular-todo-item.component';

const app = {
    template: require('./app.html'),
};

angular.module('app', [])
    .component('app', app)
    .factory('TodoListService',TodoListService)
    .component('todoList', TodoListComponent)
    .component('todoItem', react2angular(TodoItem, ['task', 'markTaskDone']))
  .component('angularTodoItem', AngularTodoItemComponent);
