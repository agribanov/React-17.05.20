import React, { Component } from 'react';

import './ContactForm.css';

export class ContactForm extends Component {
    constructor(props) {
        super(props);

        console.log('contructor');

        // this.state = {
        //     ...props.contact,
        // };
    }

    // static getDerivedStateFromProps(props, state) {
    //     if (state.id !== props.contact.id) {
    //         return {
    //             ...props.contact,
    //             id: props.contact.id,
    //         };
    //     }

    //     return null;
    // }

    onDeleteBtnClick = () => {
        this.props.onDelete(this.props.contact);
    };

    onContactFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSave(this.props.contact);
    };

    render() {
        console.log('form render', this.props);
        return (
            <form
                action=""
                className="contact-form"
                onSubmit={this.onContactFormSubmit}
            >
                <h2>Contact Details</h2>
                <label htmlFor="nameInput">Name</label>
                <input
                    type="text"
                    name="name"
                    id="nameInput"
                    value={this.props.contact.name}
                    onChange={this.props.onChange}
                />
                <br />

                <label htmlFor="surnameInput">Surname</label>
                <input
                    type="text"
                    name="surname"
                    id="surnameInput"
                    value={this.props.contact.surname}
                    onChange={this.props.onChange}
                />
                <br />

                <label htmlFor="ageInput">Age</label>
                <input
                    type="text"
                    name="age"
                    id="ageInput"
                    value={this.props.contact.age}
                    onChange={this.props.onChange}
                />
                <br />

                <label htmlFor="phoneInput">Phone</label>
                <input
                    type="text"
                    name="phone"
                    id="phoneInput"
                    value={this.props.contact.phone}
                    onChange={this.props.onChange}
                />

                <div className="buttons">
                    <button type="submit" className="pull-right">
                        Save
                    </button>
                    {this.props.contact.id ? (
                        <button
                            type="button"
                            className="pull-left"
                            onClick={this.onDeleteBtnClick}
                        >
                            Delete
                        </button>
                    ) : (
                        ''
                    )}
                </div>
            </form>
        );
    }
}

export default ContactForm;
