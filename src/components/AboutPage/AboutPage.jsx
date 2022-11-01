import React from 'react';
import { Typography } from '@mui/material';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function AboutPage() {
  return (
    <div className="container">
      
      <Typography align='center'><h1>Built with:</h1></Typography>
      <Typography align='center'>
      <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>PostgreSQL</li>
        <li>React</li>
        <li>Redux</li>
        <li>Material UI</li>
      </Typography>
      <Typography align='center'> <h1>Future Plans</h1> 
        <p> Additional features I would like to instate would include beneficial resources for people that have a hard time paying bills. 
          Clicking a visit card would give you the full info for that visit.  </p>
      </Typography>
      <br />


      <Typography align='center'> <h1>Special thanks:</h1> 

      <p> I would like to thank Prime Digital Academy for the opportunity to learn and meet my fellow cohort mates, and Chris Black for providing me the support and skills needed to succeed.
        <br />
        Special thanks to my 9am group members, you guys made this experience a lot more memorable. </p>
      </Typography>
     

    </div>
  );
}

export default AboutPage;
