import React, { Component } from 'react';

import ContactsList from '../contactsList/ContactsList';
import ContactForm from '../contactForm/ContactForm';
import contactsService from '../../contactsService';

const EMTY_CONTACT = {
    age: '',
    name: '',
    surname: '',
    phone: '',
};

export default class Contacts extends Component {
    state = {
        selectedContact: this.getEmptyContact(),
        contacts: [],
    };

    componentDidMount() {
        contactsService.getContacts().then((contacts) => {
            this.setState({ contacts });
        });
    }

    getEmptyContact() {
        return { ...EMTY_CONTACT };
    }

    onAddNewBtnClick = () => {
        this.setState({
            selectedContact: this.getEmptyContact(),
        });
    };

    onContactSelect = (contact) => {
        this.setState({
            selectedContact: contact,
        });
    };

    onDelete = (contact) => {
        contactsService.deleteContact(contact.id);
        this.setState({
            contacts: this.state.contacts.filter((el) => el.id !== contact.id),
            selectedContact: this.getEmptyContact(),
        });
    };

    onSave = (contact) => {
        if (contact.id) {
            this.updateContact(contact);
        } else {
            this.createContact(contact);
        }
    };

    createContact(contact) {
        contactsService.addContact(contact).then((newContact) => {
            this.setState({
                contacts: [...this.state.contacts, newContact],
                selectedContact: newContact,
            });
        });
    }

    updateContact(contact) {
        contactsService.updateContact(contact).then(() => {
            this.setState({
                contacts: this.state.contacts.map((el) =>
                    el.id === contact.id ? contact : el
                ),
                selectedContact: contact,
            });
        });
    }

    onFormInputChange = (e) => {
        this.setState({
            selectedContact: {
                ...this.state.selectedContact,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {
        return (
            <>
                <div className="left-panel">
                    <ContactsList
                        contacts={this.state.contacts}
                        onSelect={this.onContactSelect}
                    ></ContactsList>
                    <button
                        onClick={this.onAddNewBtnClick}
                        className="add-new-contact-btn"
                    >
                        Add new
                    </button>
                </div>
                <div className="right-panel">
                    <ContactForm
                        contact={this.state.selectedContact}
                        onDelete={this.onDelete}
                        onSave={this.onSave}
                        onChange={this.onFormInputChange}
                    ></ContactForm>
                </div>
            </>
        );
    }
}
