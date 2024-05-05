import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import SimpleDialogDemo from '../Modal';

const TruncateTextComponent = ({ text, maxLength=30 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedText = text.slice(0, maxLength);
  const shouldTruncate = text.length > maxLength;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='truncate-text-container'>
      <Typography className='trucated-text' variant='body2'>{isExpanded ? text : truncatedText+ " ..."}</Typography> {shouldTruncate && <Button style={{padding: "0px"}} variant='text'   onClick={handleToggle}>{isExpanded ? "View Less" : "View More"}</Button>}
    </div>
    
  );
};

export default TruncateTextComponent;
