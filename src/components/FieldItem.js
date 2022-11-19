import TreeItem from "@mui/lab/TreeItem";
import {useState} from "react";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import SubformWrapper from "./SubformWrapper";

const FieldItem = ({
                     parentIndex,
                     fieldIndex,
                     contentState,
                     setContentState,
                     field
                   }) => {
  const [uiMode, setUiMode] = useState(null);

  const getForms = () => {
    switch (uiMode) {
      case 'edit':
        return 'EDIT FORM'
      case 'storage':
        return 'STORAGE FORM'
      case 'delete':
        return 'Are you sure you wanna delete'
      default:
        return ''
    }
  }



  return (
    <div style={{marginLeft: '1rem'}}>
      {field.label}
      <Button size='sm' onClick={() => setUiMode('edit')}>Edit</Button>
      <Button size='sm' onClick={() => setUiMode('storage')}>Storage Settings</Button>
      <Button size='sm' onClick={() => setUiMode('delete')}>Delete</Button>
      {uiMode !== null &&  <Box sx={{  p: 2, border: '1px solid grey' }}>
         <SubformWrapper setUiMode={setUiMode}><p>{getForms()}</p></SubformWrapper>
      </Box>}
    </div>

      // {uiMode !== null &&  <Box sx={{ p: 2, border: '1px dashed grey' }}>
      //   {getForms()}
      // </Box>}
    // </TreeItem>
  );
};

export default FieldItem;
