import axios from 'axios';
export default axios.create({
    baseURL: 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io',
    headers: {
        'Content-Type': 'application/json',
    },
});

// function getContacts() {
//     return usersAPI.get();
// }

// function addContact(contact) {
//     return usersAPI.post('', contact);
// }

// function updateContact(contact) {
//     return usersAPI.put(contact.id, contact);
// }

// function deleteContact(id) {
//     return usersAPI.delete(id);
// }

// export default {
//     getContacts,
//     addContact,
//     updateContact,
//     deleteContact,
// };
