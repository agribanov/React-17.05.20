import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import List from './List';
import { getContacts } from '../../store/actions/contacts';
import { useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Form from './Form';
function Contacts({ getContacts }) {
    useEffect(() => {
        getContacts();
    }, [getContacts]);

    const { path, url } = useRouteMatch();

    console.log(path, url);
    return (
        <Paper>
            <Switch>
                <Route path={path + '/'} exact>
                    <List />
                </Route>
                <Route path={path + '/:id'}>
                    <Form />
                </Route>
            </Switch>
        </Paper>
    );
}

const mapDispatchToprops = {
    getContacts,
};

export default connect(null, mapDispatchToprops)(Contacts);
