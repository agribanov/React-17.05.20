import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import './App.css';
import Navigation from './components/common/Navigation';
import Home from './components/home/Home';
import Contacts from './components/contacts/Contacts';
import About from './components/about/About';

function App() {
    return (
        <Router>
            <Container maxWidth="lg">
                <Navigation />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/contacts">
                                <Contacts />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="*">
                                <Redirect to="/" />
                            </Route>
                        </Switch>
                    </Grid>
                </Grid>
            </Container>
        </Router>
    );
}

export default App;
