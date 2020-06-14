import React from 'react';

function ContactsListItem() {
    return (
        <li
            className="contact-list-item"
            onClick={this.props.onSelect.bind(null, contact)}
        >
            {contact.name} {contact.surname}
        </li>
    );
}

export default ContactsListItem;
