export const ACTION_SET_FITLER = 'ACTION_SET_FITLER';
export function setFilter(filter) {
    return {
        type: ACTION_SET_FITLER,
        payload: filter,
    };
}
