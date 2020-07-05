import React, { useState, useEffect } from 'react';
import List from './components/List';
import Modal from './components/Modal';
import { connect } from 'react-redux';
import { openModal } from './store/actions/todos';
function App({ modalVisible, openModal }) {
    return (
        <>
            <button onClick={() => openModal()}>Add New</button>
            <List />
            {modalVisible ? <Modal /> : null}
        </>
    );
}

function mapStateToProps(state) {
    return {
        modalVisible: !!state.todos.formItem,
    };
}

const mapDispatchToProps = {
    openModal: openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
