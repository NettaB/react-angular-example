/**@inject*/
const TASKS = {
    't1': {
        id: 't1',
        title: "wash dishes",
        content: "you haven't done them all week!",
        isDone: false
    },
    't2': {
        id: 't2',
        title: "take a shower",
        content: "you smell",
        isDone: false
    },
    't3': {
        id: 't3',
        title: "eat all the pizza",
        content: "the only task worth doing",
        isDone: false
    },
    't4': {
        id: 't4',
        title: "take over world",
        content: "easy peasy",
        isDone: true
    }
};

function TodoListService($http) {
    return {
        tasks: {},
        getTasks: function() {
            return $http.get('https://test-api-9ee9d.firebaseio.com/tasks.json').then((res) => {
                this.tasks = res.data
            });
        },
        toggleTaskDone: function(id) {
            const newTask = Object.assign({}, this.tasks[id]);
            newTask.isDone = !newTask.isDone;
            return $http.put(`https://test-api-9ee9d.firebaseio.com/tasks/${id}.json`, newTask).then((res) => {
                console.info(res);
            })
        }
    }
}

export default TodoListService;