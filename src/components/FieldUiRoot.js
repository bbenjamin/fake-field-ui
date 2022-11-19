import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import Button from "@mui/material/Button";
import { useState } from "react";
import { contentTypes } from "../fake_storage/defaultContentTypes";
import ManageDisplay from "./ManageDisplay";
import ManageFormDisplay from "./ManageFormDisplay";
import Fields from "./Fields";
import SubformWrapper from "./SubformWrapper";
import AddContentTypeForm from "./AddContentTypeForm";


const FieldUiRoot = () => {
  const [contentState, setContentState] = useState(contentTypes);
  const [uiMode, setUiMode] = useState(null);

  return (
    <>
      <h2>Content Types</h2>
      <TreeView
        aria-label="content types"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ overflowY: "auto" }}
      >
        {contentState.map((contentType, index) => (
          <TreeItem key={index} nodeId={`${index}`} label={contentType.name}>
            <Fields
              parentIndex={index}
              contentState={contentState}
              setContentState={setContentState}
            />
            <ManageDisplay parentIndex={index} />
            <ManageFormDisplay parentIndex={index} />

          </TreeItem>
        ))}
      </TreeView>
      <Button onClick={() => setUiMode('add_content_type')} size="small" variant="contained">
        + Add Content Type
      </Button>
      {uiMode === 'add_content_type' && <SubformWrapper setUiMode={setUiMode}><AddContentTypeForm/></SubformWrapper> }
    </>
  );
};

export default FieldUiRoot;
