function TodoListCtrl (TodoListService) {
    const ctrl = this;

    ctrl.$onInit = () => {
        TodoListService.getTasks();
        ctrl.tasks = TodoListService.tasks;
    };

    ctrl.markTaskDone = (id) => {
        TodoListService.markTaskDone(id);
        ctrl.tasks = TodoListService.tasks;
        console.log(ctrl.tasks);
    }
}

const TodoListComponent = {
    template: require('./todo-list.tpl.html'),
    controller: TodoListCtrl
};

export default TodoListComponent;