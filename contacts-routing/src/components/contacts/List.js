import React from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Button,
} from '@material-ui/core';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { useHistory, useRouteMatch, Link } from 'react-router-dom';

function List({ contacts }) {
    const history = useHistory();
    const { path, url } = useRouteMatch();

    function onAddButtonClick() {
        history.push(url + '/new');
    }
    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Surname</TableCell>
                            <TableCell align="right">Phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contacts.map((contact) => (
                            <ListItem contact={contact} key={contact.id} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Link to={url + '/new'}>New</Link>
        </>
    );
}

const mapStateToProps = ({ contacts: { items } }) => ({
    contacts: items,
});

export default connect(mapStateToProps)(List);
