import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
export default function ListItem({ contact }) {
    const history = useHistory();
    const { path, url } = useRouteMatch();

    function onRowClick() {
        console.log(history);
        history.push(url + '/' + contact.id);
    }

    return (
        <TableRow onClick={onRowClick}>
            <TableCell component="th" scope="row">
                {contact.name}
            </TableCell>
            <TableCell align="right">{contact.surname}</TableCell>
            <TableCell align="right">{contact.phone}</TableCell>
        </TableRow>
    );
}
