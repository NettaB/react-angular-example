function TodoListCtrl (TodoListService) {
    const ctrl = this;
    ctrl.$onInit = () => {
        TodoListService.getTasks();
        ctrl.tasks = TodoListService.tasks;
    };
}

const TodoListComponent = {
    template: require('./todo-list.tpl.html'),
    controller: TodoListCtrl
};

export default TodoListComponent;