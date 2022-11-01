import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import Diversity2Icon from '@mui/icons-material/Diversity2';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
      <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
}}>
        <h2 className="nav-title">FamCare</h2>
<Diversity2Icon 

sx={{
  fontSize: 32,
  color: 'white',
  ml:1
    }}/>
        </div>
      </Link>

      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/medication">
              Medications
            </Link>

            <Link className="navLink" to="/procedure">
              Procedures
            </Link>

            <Link className="navLink" to="/scan">
              Scans
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
