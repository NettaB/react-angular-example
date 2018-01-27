import angular from 'angular';
import { react2angular } from 'react2angular';

import '../style/app.css';
import TodoListService from '../todo-list/todo-list.service';
import ReactTodoList from '../todo-list/todo-list.component.jsx';
import AngularToDoListComponent from '../todo-list/angular-todo-list.component';

const app = {
    template: require('./app.html'),
};


angular.module('app', [])
    .component('app', app)
    .factory('TodoListService',TodoListService)
    .component('reactTodoList', react2angular(ReactTodoList, [], ['TodoListService']))
  .component('angularTodoList', AngularToDoListComponent);
