import TodoListService from './todo-list.service';

export const ACTION_TYPES = {
    GET_TASKS: 'GET_TASKS',
    MARK_TASK_DONE: 'MARK_TASK_DONE'
};

function getTasks(payload) {
    return {
        type: ACTION_TYPES.GET_TASKS,
        payload
    }
}

function markAsDone(id) {
    return {
        type: ACTION_TYPES.MARK_TASK_DONE,
        payload: id
    }
}

export default {
    getTasks,
    markAsDone
}