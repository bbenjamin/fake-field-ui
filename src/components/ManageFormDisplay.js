import TreeItem from "@mui/lab/TreeItem";

const ManageFormDisplay = ({parentIndex}) => {
  return <TreeItem nodeId={`${parentIndex}-form-display`} label='Form Display'>
    'FORM DISPLAY SETTINGS'
  </TreeItem>
}

export default ManageFormDisplay;
