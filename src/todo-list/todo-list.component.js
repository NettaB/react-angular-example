function TodoListCtrl (TodoListService) {
    const ctrl = this;
    ctrl.$onInit = () => {
       TodoListService.test();
    }
}

const TodoListComponent = {
    template: require('./todo-list.tpl.html'),
    controller: TodoListCtrl
};

export default TodoListComponent;