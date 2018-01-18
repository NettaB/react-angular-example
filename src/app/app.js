import angular from 'angular';
import { react2angular } from 'react2angular';

import '../style/app.css';
import TodoListService from '../todo-list/todo-list.service';
import TodoListComponent from '../todo-list/todo-list.component';
import TodoItem from '../todo-item/todo-item.component.jsx';

const app = {
    template: require('./app.html'),
};


angular.module('app', [])
    .component('app', app)
    .factory('TodoListService',TodoListService)
    .component('todoList', TodoListComponent)
    .component('todoItem', react2angular(TodoItem, ['id', 'title', 'content', 'isDone'], ['TodoListService']));
