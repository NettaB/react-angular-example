function TodoListCtrl (TodoListService) {
    const ctrl = this;
    ctrl.$onInit = () => {
        ctrl.tasks = [
            {
                id: 1,
                title: "wash dishes",
                content: "you haven't done them all week!",
                isDone: false
            },
            {
                id: 2,
                title: "take a shower",
                content: "you smell",
                isDone: false
            },
            {
                id: 3,
                title: "eat all the pizza",
                content: "the only task worth doing",
                isDone: false
            },
            {
                id: 4,
                title: "take over world",
                content: "easy peasy",
                isDone: true
            }
        ];
       console.log(TodoListService.getTasks());
    }
}

const TodoListComponent = {
    template: require('./todo-list.tpl.html'),
    controller: TodoListCtrl
};

export default TodoListComponent;