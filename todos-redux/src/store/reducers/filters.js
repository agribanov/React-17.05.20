import { ACTION_SET_FITLER } from '../actions/fitlers';

const initialState = {
    filter: 'all',
};

export default function (state = initialState, { type, payload }) {
    console.log('Fitlers reducer', state, type, payload);
    switch (type) {
        case ACTION_SET_FITLER:
            return { ...state, filter: payload };
        default:
            return state;
    }
}
