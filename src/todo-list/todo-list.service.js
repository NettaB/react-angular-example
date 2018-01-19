/**@inject*/
const TASKS = {
    1: {
        id: 1,
        title: "wash dishes",
        content: "you haven't done them all week!",
        isDone: false
    },
    2: {
        id: 2,
        title: "take a shower",
        content: "you smell",
        isDone: false
    },
    3: {
        id: 3,
        title: "eat all the pizza",
        content: "the only task worth doing",
        isDone: false
    },
    4: {
        id: 4,
        title: "take over world",
        content: "easy peasy",
        isDone: true
    }
};

function TodoListService() {
    return {
        tasks: {},
        getTasks: function() {
            this.tasks = TASKS;
        },
        markTaskDone: function(id) {
            TASKS[`${id}`].isDone = true;
        }
    }
}

export default TodoListService;