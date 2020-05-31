import React, { Component } from 'react';

export class ContactsListItem extends Component {
    render() {
        const { contact } = this.props;
        return (
            <tr>
                <td>{contact.name}</td>
                <td>{contact.surname}</td>
                <td>{contact.age}</td>
                <td>{contact.phone}</td>
                <td>
                    <button
                        onClick={this.props.onDelete.bind(null, contact.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default ContactsListItem;
