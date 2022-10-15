import React from 'react';
import { TextField, Button } from '@mui/material';
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
        <TextField className="filled-basic" label="Phone" variant="filled" /> 
        <TextField className="filled-basic" label="Medication and dose" variant="filled" />
        <TextField className="filled-basic" label="Notes" variant="filled" />
        <br />
        <Button>Submit</Button>
        <br />
        <br />
        <br />
        <h2>Procedures</h2>
        <TextField className="filled-basic" label="Phone" variant="filled" />
        <TextField className="filled-basic" label="Exam" variant="filled" />
        <TextField className="filled-basic" label="Notes" variant="filled" />
        <br />
        <Button>Submit</Button>
        <br />
        <br />
        <br />
        <h2>Scans</h2>
        <TextField className="filled-basic" label="Phone" variant="filled" />
        <TextField className="filled-basic" label="Scan" variant="filled" />
        <TextField className="filled-basic" label="Notes" variant="filled" />
        <br />
        <Button>Submit</Button>
      </div>
    </div>
  );
}

export default NewVisit;