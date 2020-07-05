const initialState = {
    filter: 'all',
};

export default function (state = initialState, { type, payload }) {
    console.log('Fitlers reducer', state, type, payload);
    switch (type) {
        default:
            return state;
    }
}
