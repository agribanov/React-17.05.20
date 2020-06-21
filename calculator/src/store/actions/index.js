export const ADD_ACTION = 'ACTION/ADD';
export function add(value) {
    return {
        type: ADD_ACTION,
        payload: value,
    };
}
