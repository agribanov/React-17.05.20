import React from 'react';
import './App.css';

import ContactsList from './components/contactsList/ContactsList';

class App extends React.Component {
    render() {
        return (
            <>
                <header className="App-header">Contacts App</header>
                <ContactsList></ContactsList>
            </>
        );
    }
}

export default App;
