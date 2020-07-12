import React from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';

function Form({ contact }) {
    console.log(contact);
    return <div>Form</div>;
}

const mapStateToProps = (state, props) => {
    const contact =
        props.match.params.id == 'new'
            ? {
                  name: '',
                  surname: '',
                  phone: '',
              }
            : state.contacts.items.find(
                  (contact) => contact.id == props.match.params.id
              );
    return {
        contact,
    };
};

export default withRouter(connect(mapStateToProps)(Form));
