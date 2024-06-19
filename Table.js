import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

function TableRows(characters, remove_character) {
    let tableRows_jsx = [];
    for (let i = 0; i < characters.length; i++) {
        tableRows_jsx.push( 
        <tr>
            <td>{characters[i].index}</td>
            <td>{characters[i].rows.fname}</td>
            <td>{characters[i].rows.lastname}</td>
            <td>{characters[i].rows.email}</td>
            <td><button onClick={() => remove_character(i)}> Delete </button></td>
        </tr>
        )
    }
    return tableRows_jsx;
}

const Table = (props) => {
    const {characters, removeCharacter} = props;
    return (
        <table>
        <TableHeader />
        <tbody>{TableRows(characters, removeCharacter)}</tbody>
       </table>
    );
}
export default Table;