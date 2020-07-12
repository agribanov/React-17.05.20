import api from '../../api';

export const SET_CONTACTS = 'SET_CONTACTS';
export const getContacts = () => (dispatch) => {
    api.get().then((resp) =>
        dispatch({
            type: SET_CONTACTS,
            payload: resp.data,
        })
    );
};
