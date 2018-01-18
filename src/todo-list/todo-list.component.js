function TodoListCtrl (TodoListService) {
    const ctrl = this;
    ctrl.$onInit = () => {
        ctrl.tasks = TodoListService.getTasks();
    };
}

const TodoListComponent = {
    template: require('./todo-list.tpl.html'),
    controller: TodoListCtrl
};

export default TodoListComponent;