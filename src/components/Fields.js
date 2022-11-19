import FieldItem from "./FieldItem";
import TreeItem from "@mui/lab/TreeItem";
import SubformWrapper from "./SubformWrapper";
import {useState} from "react";
import AddFieldForm from "./AddFieldForm";


const Fields = ({ parentIndex, contentState, setContentState }) => {
  const fieldList = contentState[parentIndex].fields;
  const [uiMode, setUiMode] = useState(null);


  const addField = (e) => {
    setUiMode('addField');
    e.stopPropagation()
  }


  const label = () => {
    return <>
      <b>Fields</b> <button disabled={uiMode} onClick={addField}>Add field</button>
    </>
  }

  return (
    <>
      {uiMode !== null &&
        <SubformWrapper setUiMode={setUiMode}>
          <AddFieldForm
            contentState={contentState}
            setContentState={setContentState}
            parentIndex={parentIndex}
          />
        </SubformWrapper>}
      <TreeItem nodeId={`${parentIndex}-fields`} label={label()}>

        {fieldList.map((field, index) => (
        <FieldItem
          parentIndex={parentIndex}
          fieldIndex={index}
          key={index}
          field={field}
        />
      ))}
    </TreeItem>
    </>
  );
};

export default Fields;
