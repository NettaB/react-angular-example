function TodoListCtrl (TodoListService) {
    const ctrl = this;

    ctrl.$onInit = () => {
        TodoListService.getTasks().then(() => {
          ctrl.tasks = TodoListService.tasks;
        })
    };

    ctrl.toggleTaskDone = (id) => {
        TodoListService.toggleTaskDone(id).then(() => {
          TodoListService.getTasks().then(() => {
            ctrl.tasks = TodoListService.tasks;
          })
        });
    }
}

const TodoListComponent = {
    template: require('./todo-list.tpl.html'),
    controller: TodoListCtrl
};

export default TodoListComponent;