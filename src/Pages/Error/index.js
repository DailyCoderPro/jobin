import { Button, Typography } from '@mui/material';
import React from 'react';
import "./style.css";

const NotFoundPage = () => {

  return (
    <div className={"Error-Container"}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h5">Page Not Found</Typography>
      <Typography variant="body1">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</Typography>
      <Button variant="contained" color="primary" onClick={() => window.location.href = '/'}>Go Home</Button>
    </div>
  );
};

export default NotFoundPage;
