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
import Grid from '@mui/material/Grid';
import VisitCard from './VisitCard';

// import { useParams } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function VisitCardGrid() {

  const dispatch = useDispatch();
  // const {id} = useParams();
  // const [visitList, setVisitList] = useState([]);
  // const [itemList, setItemList] = useState([]);


  // useEffect(() => {
  //   // fetchVisitID();
  //     // fetchVisit(25);
  // }, []);
  
//   const fetchVisitID = () => {
//     axios.get('/api/newVisit')
//     .then((response) => {
//       setVisitList(response.data);
//       console.log('response data', visitList[0].id);
//       fetchVisit(visitList[0].id);

//     }).catch((error) => {
//         console.log('error in fetchMeds', error);
//     });
// }

  // const fetchVisit = (id) =>{
  //     axios.get(`/api/visit/${id}`)
  //     .then((response) => {
  //         setReducers(response.data[0]);
  //     }).catch((error) => {
  //         console.log('error in fetchVisit', error);
  //     });
  // }

  // const setReducers = (item) => {
  //   dispatch({type: 'SET_MED', payload: item.med_name})
  //   dispatch({type: 'SET_MED_PHONE', payload: item.med_phone})
  //   dispatch({type: 'SET_MED_NOTES', payload: item.med_notes})
  //   dispatch({type: 'SET_PROCEDURE', payload: item.procedure_name})
  //   dispatch({type: 'SET_PROCEDURE_PHONE', payload: item.procedure_phone})
  //   dispatch({type: 'SET_PROCEDURE_NOTES', payload: item.procedure_notes})
  //   dispatch({type: 'SET_SCAN', payload: item.scan_name})
  //   dispatch({type: 'SET_SCAN_PHONE', payload: item.scan_phone})
  //   dispatch({type: 'SET_SCAN_NOTES', payload: item.scan_notes})
  // }

  return (
<div>
<VisitCard  />
</div>    

);
}


export default VisitCardGrid;