import React, { Component } from 'react';
import './ContactsListForm.css';

export default class ContactsListForm extends Component {
    state = {
        values: {
            name: 'Alex',
            surname: 'Smith',
            age: '33',
            phone: '000',
        },
        isValid: {
            name: true,
            surname: true,
            age: true,
            phone: true,
        },
        isFormValid: true,
    };

    onSaveClick = () => {
        this.props.onSave({ ...this.state.values });
    };

    onInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            values: {
                ...this.state.values,
                [name]: value,
            },
        });

        this.validateInput(name, value);
    };

    validateInput(name, value) {
        const isValid = {
            ...this.state.isValid,
            [name]: this.isValueValid(name, value),
        };

        this.setState({
            isValid,
            isFormValid: !Object.keys(isValid).find((key) => !isValid[key]),
        });
    }

    isValueValid(name, value) {
        switch (name) {
            case 'name':
            case 'surname':
                return !!value;
            case 'phone':
                return (
                    !!value &&
                    value.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)
                );
            case 'age':
                return !!value && !isNaN(value);
        }
    }

    render() {
        const { values, isValid } = this.state;
        return (
            <tr>
                <td>
                    <input
                        className={isValid.name ? '' : 'error'}
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={this.onInputChange}
                    />
                </td>
                <td>
                    <input
                        className={isValid.surname ? '' : 'error'}
                        type="text"
                        name="surname"
                        value={values.surname}
                        onChange={this.onInputChange}
                    />
                </td>
                <td>
                    <input
                        className={isValid.age ? '' : 'error'}
                        type="text"
                        name="age"
                        value={values.age}
                        onChange={this.onInputChange}
                    />
                </td>
                <td>
                    <input
                        className={isValid.phone ? '' : 'error'}
                        type="text"
                        name="phone"
                        value={values.phone}
                        onChange={this.onInputChange}
                    />
                </td>
                <td>
                    <button
                        onClick={this.onSaveClick}
                        disabled={!this.state.isFormValid}
                    >
                        Save
                    </button>
                    <button onClick={this.props.onCancel}>Cancel</button>
                </td>
            </tr>
        );
    }
}
