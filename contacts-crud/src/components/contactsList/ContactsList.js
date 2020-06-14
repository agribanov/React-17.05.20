import React, { Component } from 'react';
import './ContactsList.css';

import ContactsListItem from '../contactsListItem/ContactsListItem';

export class ContactsList extends Component {
    render() {
        return (
            <ul className="contacts-list">
                {this.props.contacts.map((contact) => (
                    <ContactsListItem
                        contact={contact}
                        key={contact.id}
                        onSelect={this.props.onSelect}
                    ></ContactsListItem>
                ))}
            </ul>
        );
    }
}

export default ContactsList;
