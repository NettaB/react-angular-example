import angular from 'angular';
import { react2angular } from 'react2angular';
import ngRedux from 'ng-redux';

import '../style/app.css';
import TodoListService from '../todo-list/todo-list.service';
import ReactTodoList from '../todo-list/todo-list.component.jsx';
import AngularTodoList from '../todo-list/angular-todo-list.component';
import TasksReducer from '../todo-list/todo-list.reducer';
import ActionCreators from '../todo-list/todo-list.actions';

const app = {
    template: require('./app.html'),
    controller: function($ngRedux) {
        const ctrl = this;
        ctrl.$onInit = () => {
            ctrl.store = $ngRedux;
        };
    }
};


angular.module('app', [ngRedux])
    .config(($ngReduxProvider) => {
        let reducer = TasksReducer;
        $ngReduxProvider.createStoreWith(reducer);
    })
    .component('app', app)
    .factory('TodoListService',TodoListService)
    .component('reactTodoList', react2angular(ReactTodoList, ['store'], ['TodoListService', '$ngRedux']))
    .component('angularTodoList', AngularTodoList);
