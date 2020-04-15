import React, { Component } from 'react';
import { TextField, Paper } from '@material-ui/core';


export default class searchBar extends Component {
    state = {
        searchTerm: '',
    }

    hanelChange = (event) => this.setState({ searchBar: event.target.value });

    handelSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);
        event.preventDefault();
    }

    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handelSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.hanelChange} />
                </form>
            </Paper>
        )
    }
}
