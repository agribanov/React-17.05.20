import React, { Component } from 'react';
import './ContactsList.css';

import ContactsListItem from '../contactsListItem/ContactsListItem';
import ContactsListForm from '../contactsListForm/ContactsListForm';

export class ContactsList extends Component {
    state = {
        contacts: [
            {
                id: 1,
                age: 33,
                name: 'Leanne',
                surname: 'Graham',
                phone: '1-770-736-8031 x56442',
            },
            {
                id: 2,
                age: 33,
                name: 'Ervin',
                surname: 'Howell',
                phone: '010-692-6593 x09125',
            },
            {
                id: 3,
                age: 33,
                name: 'Clementine',
                surname: 'Bauch',
                phone: '1-463-123-4447',
            },
            {
                id: 4,
                age: 33,
                name: 'Patricia',
                surname: 'Lebsack',
                phone: '493-170-9623 x156',
            },
            {
                id: 5,
                age: 33,
                name: 'Chelsey',
                surname: 'Dietrich',
                phone: '(254)954-1289',
            },
            {
                id: 6,
                age: 33,
                name: 'Dennis',
                surname: 'Schulist',
                phone: '1-477-935-8478 x6430',
            },
            {
                id: 7,
                age: 33,
                name: 'Kurtis',
                surname: 'Weissnat',
                phone: '210.067.6132',
            },
            {
                id: 8,
                age: 33,
                name: 'Nicholas',
                surname: 'Runolfsdottir V',
                phone: '586.493.6943 x140',
            },
            {
                id: 9,
                age: 33,
                name: 'Glenna',
                surname: 'Reichert',
                phone: '(775)976-6794 x41206',
            },
            {
                id: 10,
                age: 33,
                name: 'Clementina',
                surname: 'DuBuque',
                phone: '024-648-3804',
            },
        ],
    };

    onDelete = (contactId) => {
        this.setState({
            contacts: this.state.contacts.filter(({ id }) => id !== contactId),
        });
    };

    render() {
        return (
            <table className="contacts-list">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.contacts.map((contact) => (
                        <ContactsListItem
                            contact={contact}
                            key={contact.id}
                            onDelete={this.onDelete}
                        ></ContactsListItem>
                    ))}
                </tbody>
                <tfoot>
                    <ContactsListForm></ContactsListForm>
                </tfoot>
            </table>
        );
    }
}

export default ContactsList;
