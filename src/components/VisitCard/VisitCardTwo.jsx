import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import Grid from '@mui/material/Grid';
import MedicationIcon from '@mui/icons-material/Medication';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PsychologyIcon from '@mui/icons-material/Psychology';

// import { useParams } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function VisitCardTwo() {
//   const medName = useSelector(store => store.med);
// console.log('medname', medName)
  const dispatch = useDispatch();
  // const {id} = useParams();
  const [visitList, setVisitList] = useState([]);
  // const [itemList, setItemList] = useState([]);


  useEffect(() => {
    fetchVisitID();
  }, []);
  
  const fetchVisitID = () => {
    axios.get('/api/newVisit')
    .then((response) => {
      // setVisitList(response.data);
      console.log('response data', response.data);
      const id = response.data[2].id

      console.log('id', id)
      fetchVisit(id);

    }).catch((error) => {
        console.log('error in fetchMeds', error);
    });
}

  const fetchVisit = (id) =>{
      axios.get(`/api/visit/${id}`)
      .then((response) => {
          setVisitList(response.data[0]);
          console.log('visitList', visitList);

      }).catch((error) => {
          console.log('error in fetchVisit', error);
      });
  }


  const setReducers = (item) => {
    dispatch({type: 'SET_MED', payload: item.med_name})
    dispatch({type: 'SET_MED_PHONE', payload: item.med_phone})
    dispatch({type: 'SET_MED_NOTES', payload: item.med_notes})
    dispatch({type: 'SET_PROCEDURE', payload: item.procedure_name})
    dispatch({type: 'SET_PROCEDURE_PHONE', payload: item.procedure_phone})
    dispatch({type: 'SET_PROCEDURE_NOTES', payload: item.procedure_notes})
    dispatch({type: 'SET_SCAN', payload: item.scan_name})
    dispatch({type: 'SET_SCAN_PHONE', payload: item.scan_phone})
    dispatch({type: 'SET_SCAN_NOTES', payload: item.scan_notes})
  }

  return (
    <div style={{ padding: 30}}>
    <Card sx={{ minWidth: 400 }} elevation={15} >
    <Box sx={{ flexGrow: 1}} style={{ padding: 8}}>
      <Grid container spacing={1}>
        <Grid>
          <Typography sx={{ mt: 1, ml: 2}}>
          {visitList.date ? <h3>Last visit on {visitList.date}</h3> : <h3>Add a New Visit</h3>}
      </Typography>
      </Grid>
      <Grid align={'right'}>
      <MedicalInformationIcon sx={{ fontSize: 55, ml: 14, mt: 2 }}
      color="primary"/>
      </Grid>
      </Grid>
      </Box>
    <CardContent>
    <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
}}>
      <MedicationIcon sx={{fontSize: 40}} color="primary"/> <ul>{visitList.med_name}</ul>
      </div>
      <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
}}>
      <PsychologyIcon sx={{fontSize: 40}} color="primary"/> <ul>{visitList.procedure_name}</ul>
      </div>
      <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
}}>
      <AssignmentIndIcon sx={{fontSize: 40}} color="primary"/> <ul>{visitList.scan_name}</ul>
    </div>
    </CardContent>
  </Card>
  </div>
);
}


export default VisitCardTwo;