import { SET_CONTACTS } from '../actions/contacts';

const initialState = {
    items: [],
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case SET_CONTACTS:
            return { ...state, items: payload };
        default:
            return state;
    }
}
