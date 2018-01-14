import angular from 'angular';

import '../style/app.css';
import TodoListService from '../todo-list/todo-list.service';
import TodoListComponent from '../todo-list/todo-list.component';
const app = {
    template: require('./app.html'),
};


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .component('app', app)
    .factory('TodoListService',TodoListService)
    .component('todoList', TodoListComponent);

export default MODULE_NAME;