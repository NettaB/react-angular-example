import ActionCreators from './todo-list.actions';

function TodoListCtrl (TodoListService, $ngRedux) {
    const ctrl = this;
    ctrl.$onInit = () => {
        TodoListService.getTasks();
        $ngRedux.dispatch(ActionCreators.getTasks(TodoListService.tasks));
        ctrl.unsubscribe = $ngRedux.connect(mapStateToThis, ActionCreators)(this);
    };

    const mapStateToThis = (state) => {
        return { tasks: state }
    };

    ctrl.$onDestroy = () => {
        ctrl.unsubscribe();
    };

    ctrl.markAsDone = (id) => {
        $ngRedux.dispatch(ActionCreators.markAsDone(id))
    }
}

const AngularTodoList = {
    template: require('./todo-list.tpl.html'),
    controller: TodoListCtrl
};

export default AngularTodoList;