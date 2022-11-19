import TreeItem from "@mui/lab/TreeItem";

const ManageDisplay = ({parentIndex}) => {
  return <TreeItem nodeId={`${parentIndex}-display`} label='Display'>
    'DISPLAY SETTINGS'
  </TreeItem>
}

export default ManageDisplay;
