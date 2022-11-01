import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import VisitCard from '../VisitCard/VisitCard';
import ResourceCard from '../ResourceCard/ResourceCard';
import VisitCardOne from '../VisitCard/VisitCardOne';
import VisitCardTwo from '../VisitCard/VisitCardTwo';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const handleClick = () => {
      history.push('/newVisit');
  }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <br />
      <br />
      <br />
      <div>
        <Box sx={{ flexGrow: 1}}>
          <Grid container spacing={2}
          style={{}}>
            <Grid  ms={35}>
        <VisitCard />
        </Grid>
            <Grid  ms={15}>
        <VisitCardOne />
        </Grid>
            <Grid ms={15}>
        <VisitCardTwo />
        </Grid>
        </Grid>
        
        </Box>
        {/* <ResourceCard /> */}
      </div>
      <Button ms={{ fontSize: 100 }} onClick={() => handleClick()} placeholder='New Visit'>New Visit</Button>
      <br />
      <Box align={'right'}>
      <LogOutButton 
      className="btn" />
      </Box>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
