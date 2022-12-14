import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';


function Scan() {
  const history = useHistory();

  const [medList, setMedList] = useState([]);

  useEffect(() => {
      fetchScan();
  }, []);
  
  const fetchScan = () =>{
      axios.get('/api/scan')
      .then((response) => {
          setMedList(response.data);
          console.log(response.data);
      }).catch((error) => {
          console.log('error in fetchMeds', error);
      });
  }

  const deleteData = (dataID) => {

    console.log(dataID)
    axios({
        method: 'DELETE',
        url: `/api/scan/${dataID}`
    }).then(response => {
        fetchScan();
    }).catch(error => {
        console.log('error in DELETE in med.jsx', error);
    })
}
  
const editData = (dataID) => {
  console.log(dataID)
  history.push(`/editE/${dataID}`);
}

    return (
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Scans</TableCell>
            <TableCell align='center'>Notes</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {medList.map((med) => (
            <TableRow
              key={med.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {med.scan_name}
              </TableCell>
              <TableCell align="center">{med.scan_notes}</TableCell>
              <TableCell align="right">{med.scan_phone}</TableCell>
              <TableCell align="right">{med.date}</TableCell>
              <TableCell>
            <Button onClick={() => editData(med.id)} >update</Button>
            </TableCell>
            <TableCell>
            <Button onClick={() => deleteData(med.id)} >delete</Button>
            </TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  }

export default Scan;