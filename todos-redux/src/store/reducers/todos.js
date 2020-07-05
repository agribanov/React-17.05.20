import {
    ACTION_DELETE,
    ACTION_TOGGLE,
    ACTION_OPEN_MODAL,
    ACTION_CLOSE_MODAL,
    ACTION_CHANGE_FORM_ITEM,
    ACTION_SAVE_FORM_ITEM,
    ACTION_SET_TODOS,
    ACTION_UPDATE_ITEM,
    ACTION_CREATE_ITEM,
} from '../actions/todos';

const initialState = {
    todos: [],
    formItem: null,
};

function getEmptyItem() {
    return { title: 'new Todo', isDone: false };
}

function updateTodo(todos, todo) {
    return todos.map((item) => (item.id == todo.id ? todo : item));
}

function createTodo(todos, todo) {
    return [...todos, todo];
}

export default function (state = initialState, { type, payload }) {
    console.log('Todos reducer', state, type, payload);

    switch (type) {
        case ACTION_SET_TODOS:
            return { ...state, todos: payload };
        case ACTION_DELETE:
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== payload),
            };
        case ACTION_TOGGLE:
            return {
                ...state,
                todos: state.todos.map((item) =>
                    item.id !== payload
                        ? item
                        : { ...item, isDone: !item.isDone }
                ),
            };

        case ACTION_OPEN_MODAL:
            return {
                ...state,
                formItem: payload
                    ? state.todos.find((item) => item.id == payload)
                    : getEmptyItem(),
            };

        case ACTION_CLOSE_MODAL:
            return {
                ...state,
                formItem: null,
            };

        case ACTION_CHANGE_FORM_ITEM:
            return {
                ...state,
                formItem: { ...state.formItem, ...payload },
            };

        case ACTION_UPDATE_ITEM:
            return {
                ...state,
                todos: updateTodo(state.todos, payload),
            };
        case ACTION_CREATE_ITEM:
            return {
                ...state,
                todos: createTodo(state.todos, payload),
            };
        default:
            return state;
    }
}
