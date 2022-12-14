import React from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function EditProcedureVisit() {
const history = useHistory();
const {id} = useParams();

const [medPhone, setMedPhone] = useState('');
const [med, setMed] = useState('');
const [medNote, setMedNote] = useState('');
const [date, setDate] = useState('');

useEffect(() => {
    fetchAndEdit();
}, []);

const fetchAndEdit = () => {
    axios.get(`/api/procedure/${id}`)
    .then((response) => {
      console.log(response.data);
      const med = response.data;
      setMedPhone(med.procedure_phone);
      setMed(med.procedure_name);
      setMedNote(med.procedure_notes);
      setDate(med.date);
    }).catch((error) => {
        console.log('error in fetchAndEdit', error);
    });
}

const editSubmit = () => {
  axios.put(`/api/procedure/${id}`, {
    phone: medPhone,
    name: med,
    notes: medNote,
    date: date
  })
  .then((response) => {
    alert('edit done');
    history.push(`/procedure`);
  }).catch((e) => {
    console.log('error in editSubmit', e);
  })
}

  return (
    <div className="container">
      <div>
        <h2>Edit your procedure entry</h2>
        <TextField  value={date} 
                    onChange={(event) => setDate(event.target.value)}
                    className="filled-basic" multiline 
                    label="date" variant="filled" /> 
        <br />
        <h2>Procedure</h2>
        <form>
        <TextField  value={medPhone} 
                    onChange={(event) => setMedPhone(event.target.value)}
                    className="filled-basic" multiline 
                    label="Phone" variant="filled" /> 
        <TextField  value={med} 
                    onChange={(event) => setMed(event.target.value)}
                    className="filled-basic" multiline 
                    label="Procedure" variant="filled" />
        <TextField  value={medNote} 
                    onChange={(event) => setMedNote(event.target.value)}
                    className="filled-basic" multiline 
                    label="Notes" variant="filled" />
        <br />
        <Button onClick={() => editSubmit()} >Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default EditProcedureVisit;