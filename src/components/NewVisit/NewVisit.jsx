import React from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function NewVisit() {
const history = useHistory();

// get request to get most recent visit number then +1 it?

// POST to database
const sendVisit = () => {
  
  console.log('in POST sendVisit');
  axios.post('/api/newvisit', {med: newMedVisit})
  .then(() => {
    alert('visit done');
    history.push(`/`)
  }).catch((err) => {
    console.log('err in POST sendVist', err);
  })

}

  const [newMedVisit, setNewMedVisit] = useState([]);
  const [medPhone, setMedPhone] = useState('');
  const [med, setMed] = useState('');
  const [medNote, setMedNote] = useState('');
  const createMedVisit = () => {
    let medVisit = {
      phone: medPhone,
      name: med,
      note: medNote,
    };
    console.log('this is the object', medVisit);
    newMedVisit.push(medVisit);
    console.log('this is the array', newMedVisit);
    setMedPhone('');
    setMed('');
    setMedNote('');
  }

  let newProcedureVisit = [];
  const [procedurePhone, setProcedurePhone] = useState('');
  const [procedure, setProcedure] = useState('');
  const [procedureNote, setProcedureNote] = useState('');

  let newExamVisit = [];
  const [examPhone, setExamPhone] = useState('');
  const [exam, setExam] = useState('');
  const [examNote, setExamNote] = useState('');
 

  return (
    <div className="container">
      <div>
        <p>This page will have input fields for the user to enter new information</p>
        <br />
        <h2>Medications</h2>
        <form>
        <TextField  value={medPhone} 
                    onChange={(event) => setMedPhone(event.target.value)}
                    className="filled-basic" multiline 
                    label="Phone" variant="filled" /> 
        <TextField  value={med} 
                    onChange={(event) => setMed(event.target.value)}
                    className="filled-basic" multiline 
                    label="Medication and dose" variant="filled" />
        <TextField  value={medNote} 
                    onChange={(event) => setMedNote(event.target.value)}
                    className="filled-basic" multiline 
                    label="Notes" variant="filled" />
        <br />
        <Button onClick={() => createMedVisit()} >Submit</Button>
        </form>
        <br />
        <br />
        <h2>Procedures</h2>
        <form>
        <TextField  value={procedurePhone} 
                    onChange={(event) => setProcedurePhone(event.target.value)}
                    className="filled-basic" multiline 
                    label="Phone" variant="filled" />
        <TextField  value={procedure} 
                    onChange={(event) => setProcedure(event.target.value)}
                    className="filled-basic" multiline 
                    label="Exam" variant="filled" />
        <TextField  value={procedureNote} 
                    onChange={(event) => setProcedureNote(event.target.value)}
                    className="filled-basic" multiline
                    label="Notes" variant="filled" />
        <br />
        <Button>Submit</Button>
        </form>
        <br />
        <br />
        <br />
        <h2>Scans</h2>
        <form>
        <TextField  value={examPhone} 
                    onChange={(event) => setExamPhone(event.target.value)}
                    className="filled-basic" multiline 
                    label="Phone" variant="filled" />
        <TextField  value={exam} 
                    onChange={(event) => setExam(event.target.value)}
                    className="filled-basic" multiline 
                    label="Scan" variant="filled" />
        <TextField value={examNote} 
                    onChange={(event) => setExamNote(event.target.value)}
                    className="filled-basic" multiline 
                    label="Notes" variant="filled" />
        <br />
        <Button>Submit</Button>
        </form>
        <Button onClick={() => sendVisit()}>End Visit</Button>
      </div>
    </div>
  );
}

export default NewVisit;