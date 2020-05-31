import React, { Component } from 'react';

export default class ContactsListForm extends Component {
    state = {
        values: {
            name: 'Alex',
            surname: 'Smith',
            age: '33',
            phone: '000',
        },
        validation: {},
    };

    onSaveClick = () => {
        this.props.onSave(this.state.values);
    };

    render() {
        const { values, validation } = this.state;
        return (
            <tr>
                <td>
                    <input type="text" name="name" value={values.name} />
                </td>
                <td>
                    <input type="text" name="surname" value={values.surname} />
                </td>
                <td>
                    <input type="text" name="age" value={values.age} />
                </td>
                <td>
                    <input type="text" name="phone" value={values.phone} />
                </td>
                <td>
                    <button onClick={this.onSaveClick}>Save</button>
                    <button onClick={this.props.onCancel}>Cancel</button>
                </td>
            </tr>
        );
    }
}
