import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {Checkbox} from "@mui/material";
import Switch, { SwitchProps } from '@mui/material/Switch';
import Typography from '@mui/material/Typography';


import {useState} from 'react';


//<select data-drupal-selector="edit-new-storage-type" id="edit-new-storage-type" name="new_storage_type" class="form-select form-element form-element--type-select"><option value="" selected="selected">- Select a field type -</option><optgroup label="General"><option value="boolean">Boolean</option><option value="datetime">Date</option><option value="email">Email</option><option value="link">Link</option><option value="timestamp">Timestamp</option></optgroup><optgroup label="Number"><option value="list_float">List (float)</option><option value="list_integer">List (integer)</option><option value="decimal">Number (decimal)</option><option value="float">Number (float)</option><option value="integer">Number (integer)</option></optgroup><optgroup label="Reference"><option value="field_ui:entity_reference:node">Content</option><option value="file">File</option><option value="image">Image</option><option value="field_ui:entity_reference:media">Media</option><option value="field_ui:entity_reference:taxonomy_term">Taxonomy term</option><option value="field_ui:entity_reference:user">User</option><option value="entity_reference">Other…</option></optgroup><optgroup label="Text"><option value="list_string">List (text)</option><option value="text">Text (formatted)</option><option value="text_long">Text (formatted, long)</option><option value="text_with_summary">Text (formatted, long, with summary)</option><option value="string">Text (plain)</option><option value="string_long">Text (plain, long)</option></optgroup></select>
const AddFieldForm =({contentState, setContentState, parentIndex, fieldIndex, setCanSubmit}) => {
  const [formState, setFormState] = useState({
    newFieldType: '',
    existingField: '',
    addExisting: false,
    label: '',
  });

  const existingFields = new Set();
  contentState.forEach(contentType => {
    contentType.fields.forEach((field) => {
      existingFields.add(`${field.field_type}: ${field.machine_name}`)
    })
  })
  console.log(contentState);

  const showLabel = (!!formState.existingField.length && formState.addExisting) ||  (!!formState.newFieldType.length && !formState.addExisting)
  const handleChange = (e, property, value = 'value') => {
    console.log(property, e.target[value])
    setFormState(prevState => {
      return {
        ...prevState,
        [property]: e.target[value],
      }
    })
  }


 return(
   <>
     <Stack direction="row" spacing={1} alignItems="center">
       <Typography>Add a new field</Typography>
       <Switch checked={formState.addExisting} onChange={(e) => handleChange(e, 'addExisting', 'checked')} />
       <Typography>Add an existing field</Typography>
     </Stack>

     <Stack direction="row" spacing={2}>
       <Box hidden={formState.addExisting}>
         <Stack>
           <label >New Field Type</label>
           <Select
             native
             value={formState.newFieldType}
             onChange={(e) => handleChange(e, 'newFieldType')}
             size='sm'
             sx={{width: 'auto'}}
           >
             <option value="">- Select a field type -</option><optgroup label="General"><option value="boolean">Boolean</option><option value="datetime">Date</option><option value="email">Email</option><option value="link">Link</option><option value="timestamp">Timestamp</option></optgroup><optgroup label="Number"><option value="list_float">List (float)</option><option value="list_integer">List (integer)</option><option value="decimal">Number (decimal)</option><option value="float">Number (float)</option><option value="integer">Number (integer)</option></optgroup><optgroup label="Reference"><option value="field_ui:entity_reference:node">Content</option><option value="file">File</option><option value="image">Image</option><option value="field_ui:entity_reference:media">Media</option><option value="field_ui:entity_reference:taxonomy_term">Taxonomy term</option><option value="field_ui:entity_reference:user">User</option><option value="entity_reference">Other…</option></optgroup><optgroup label="Text"><option value="list_string">List (text)</option><option value="text">Text (formatted)</option><option value="text_long">Text (formatted, long)</option><option value="text_with_summary">Text (formatted, long, with summary)</option><option value="string">Text (plain)</option><option value="string_long">Text (plain, long)</option></optgroup>
           </Select>
         </Stack>
       </Box>


     <Box hidden={!formState.addExisting}>
       <Stack>

         <label>Choose Existing Field</label>
         <Select
           native
           value={formState.existingField}
           onChange={(e) => handleChange(e, 'existingField')}
           size='sm'
           sx={{width: 'auto'}}
         >
           <option value="">- Select an existing field -</option>
           {[...existingFields].map((existingField, index) => <option key={index} value={existingField.split(':')[1].trim()}>{existingField}</option>)}
          </Select>

        </Stack>
     </Box>
     <Box hidden={!showLabel}>

       <Stack>

         <label>Label</label>

         <TextField
           variant="outlined"
           value={formState.label}
           onInput={(e) => handleChange(e, 'label')}
         />
       </Stack>
     </Box>

   </Stack>




   </>

 )
 }

export default AddFieldForm;
