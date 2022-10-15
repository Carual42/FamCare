import React from 'react';
import { TextField } from '@mui/material';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function NewVisit() {
  return (
    <div className="container">
      <div>
        <p>This page will have input fields for the user to enter new information</p>
        <br />
        <h2>Medications</h2>
        <TextField id="filled-basic" label="Filled" variant="filled" /> 
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <br />
        <br />
        <br />
        <h2>Procedures</h2>
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <br />
        <br />
        <br />
        <h2>Scans</h2>
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </div>
    </div>
  );
}

export default NewVisit;