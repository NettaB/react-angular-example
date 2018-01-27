function TodoListCtrl (TodoListService) {
    const ctrl = this;
    ctrl.$onInit = () => {
        TodoListService.getTasks().then(() =>{
          ctrl.tasks = TodoListService.tasks;
        })
    };

    ctrl.toggleTaskDone = (id) => {
      TodoListService.toggleTaskDone(id);
    }
}

const AngularTodoListComponent = {
    template: require('./todo-list.tpl.html'),
    controller: TodoListCtrl
};

export default AngularTodoListComponent;