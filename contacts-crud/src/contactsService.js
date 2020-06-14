const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users';

function getContacts() {
    return fetch(URL).then((res) => res.json());
}

function addContact(contact) {
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
    }).then((res) => res.json());
}

function updateContact(contact) {
    return fetch(URL + '/' + contact.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
    }).then((res) => res.json());
}

function deleteContact(id) {
    return fetch(URL + '/' + id, {
        method: 'DELETE',
    }).then((res) => res.json());
}

export default {
    getContacts,
    addContact,
    updateContact,
    deleteContact,
};
