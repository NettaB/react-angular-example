const AngularTodoItemComponent = {
  template: `<li class="angular" ng-class="{done: ctrl.task.isDone}">
                <h5><b>{{ctrl.task.title}}</b> -- {{ctrl.task.content}}</h5>
              </li>`,
  bindings: {
    task: '<'
  },
  controllerAs: 'ctrl'
};

export default AngularTodoItemComponent;