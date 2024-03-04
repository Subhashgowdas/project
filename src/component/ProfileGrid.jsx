import React from 'react';
import { Grid } from '@mui/material';
import  "../CSS/Profile.css";

const ProfileGrid = ({ data }) => {
  return (
    <Grid  > 
      <div className="profile_box">
      <h2 style={{ color: ' rgba(255, 255, 255, 0.562)' }}>Name: <span style={{ color: 'white' }}>{data.name}</span></h2>
        <h2 style={{ color: ' rgba(255, 255, 255, 0.562)' }}>EMP ID:<span style={{ color: 'white' }}> {data.empId}</span></h2>
        <h2 style={{ color: ' rgba(255, 255, 255, 0.562)' }}>DOB:<span style={{ color: 'rgba(222, 138, 92, 0.775)' }}> {data.dob}</span></h2>
        <h2 style={{ color: ' rgba(255, 255, 255, 0.562)' }}>Role:<span style={{ color: 'green' }}> {data.role}</span></h2>
      </div>
    </Grid>
  );
};

export default ProfileGrid;

