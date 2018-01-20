import { ACTION_TYPES } from './todo-list.actions';


export default function TasksReducer(state = {}, action) {
    if (!action || !action.type) {
        return state;
    }
    switch(action.type) {
        case ACTION_TYPES.GET_TASKS:
            return Object.assign({}, action.payload);
        case ACTION_TYPES.MARK_TASK_DONE:
            let newState = Object.assign({}, state);
            newState[action.payload].isDone = true;
            return newState;
        default:
            return state;
    }
}