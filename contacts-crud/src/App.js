import React from 'react';
import './App.css';

import Contacts from './components/contacts/Contacts';

class App extends React.Component {
    render() {
        return (
            <>
                <header className="App-header">Contacts App</header>
                <Contacts />
            </>
        );
    }
}

export default App;
