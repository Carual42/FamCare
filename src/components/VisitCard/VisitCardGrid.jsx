import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
// import { useParams } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function VisitCard() {

  // const {id} = useParams();
  const [visitList, setVisitList] = useState([]);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetchVisitID();
      
  }, []);
  
  const fetchVisitID = () => {
    axios.get('/api/newVisit')
    .then((response) => {
      setVisitList(response.data);
      console.log('response data', visitList[0].id);
      fetchVisit(visitList[0].id);
      
    }).catch((error) => {
        console.log('error in fetchMeds', error);
    });
}

  const fetchVisit = (id) =>{
      axios.get(`/api/visit/${id}`)
      .then((response) => {
          setItemList(response.data);
          console.log(response.data);
      }).catch((error) => {
          console.log('error in fetchVisit', error);
      });
  }

  return (
    
    <Card sx={{ minWidth: 275 }} elevation={15} >
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);
}


export default VisitCard;