import api from '../../api';

export const ACTION_DELETE = 'ACTION_DELETE';
export function deleteTodo(id) {
    return function (dispatch) {
        api.delete(id).then(() =>
            dispatch({
                type: ACTION_DELETE,
                payload: id,
            })
        );
    };
}

export const ACTION_TOGGLE = 'ACTION_TOGGLE';
export function toggleTodo(id) {
    return {
        type: ACTION_TOGGLE,
        payload: id,
    };
}

export const ACTION_OPEN_MODAL = 'ACTION_OPEN_MODAL';
export function openModal(id) {
    return {
        type: ACTION_OPEN_MODAL,
        payload: id,
    };
}

export const ACTION_CLOSE_MODAL = 'ACTION_CLOSE_MODAL';
export function closeModal() {
    return {
        type: ACTION_CLOSE_MODAL,
    };
}

export const ACTION_CHANGE_FORM_ITEM = 'ACTION_CHANGE_FORM_ITEM';
export function changeFormItem(changes) {
    return {
        type: ACTION_CHANGE_FORM_ITEM,
        payload: changes,
    };
}

export const ACTION_CREATE_ITEM = 'ACTION_CREATE_ITEM';
export const ACTION_UPDATE_ITEM = 'ACTION_UPDATE_ITEM';
export function saveFormItem(changes) {
    return function (dispatch) {
        if (changes.id) {
            api.put(changes.id, changes).then((resp) =>
                dispatch({
                    type: ACTION_UPDATE_ITEM,
                    payload: resp.data,
                })
            );
        } else {
            api.post('', changes).then((resp) =>
                dispatch({
                    type: ACTION_CREATE_ITEM,
                    payload: resp.data,
                })
            );
        }

        dispatch(closeModal());
    };
}

export const ACTION_SET_TODOS = 'ACTION_SET_TODOS';
export function setTodos(data) {
    return {
        type: ACTION_SET_TODOS,
        payload: data,
    };
}

export function fetchTodos() {
    return function (dispatch) {
        api.get().then((resp) => dispatch(setTodos(resp.data)));
    };
}
