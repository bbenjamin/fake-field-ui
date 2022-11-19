import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import React from 'react';
import {useState} from 'react';

const SubformWrapper = (props) => {
  const {children, setUiMode} = props;
  const [canSubmit, setCanSubmit] = useState(false)
  const cancel = (e) => {
    e.stopPropagation();
    setUiMode(null);
  }


  return (<Box sx={{p:2}}>
    {React.cloneElement(children, {setCanSubmit})}
    <Button disabled={!canSubmit} color="success" size='sm' variant='contained'>Submit</Button>
    <Button color="error" size='sm' onClick={cancel}>Cancel</Button>
  </Box>)
}

export default SubformWrapper;
