import { ADD_ACTION } from '../actions';

const initialState = {
    value: 10,
    userName: 'Anonym',
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_ACTION:
            return { ...state, value: state.value + payload };
        default:
            return state;
    }
}
