import React, { useCallback, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import _data from "./_data";
import { Button } from "@mui/material";
import { CheckboxSelectionCallbackParams } from "ag-grid-community";

const ContentWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#FCC",
}));

const FirstIndex = () => {
  const [rowData, setRowData] = useState(_data);
  const [mode, setMode] = useState<"select" | "drag">("select");
  const gridRef = useRef<any>();

  const [columnDefs, setColumnDefs] = useState([
    // { field: "name", sortable: true, filter: true, checkboxSelection: true },
    {
      field: "name",
      //   rowDrag: (params: any) => (mode === "drag" ? true : false),
      checkboxSelection: true,
    },
    { field: "sex" },
    { field: "age" },
    { field: "job" },
  ]);

  const clickMode = () => {
    if (mode === "select") {
      setMode("drag");
      console.log("지금 모드", mode);
    } else if (mode === "drag") {
      setMode("select");
      console.log("지금 모드", mode);
    } else {
      console.log("TYPE ERROR 1");
    }
  };

  const clickSelect = (e: any) => {
    const selectedNodes = gridRef.current?.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node: any) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node: any) => `${node.name} ${node.age}`)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  };

  const clickAll = () => {
    console.log("지금 구조는?");
  };

  const onRowDragEnd = useCallback((e) => {
    console.log("onRowDragEnd", e.node);
  }, []);

  return (
    <ContentWrapper>
      <div className="button-area">
        <Button variant="contained" color="error" onClick={clickMode}>
          모드 변경
        </Button>
        <Button variant="contained" onClick={clickSelect}>
          선택한 행 보기
        </Button>
        <Button variant="contained" onClick={clickAll}>
          행 추가하기
        </Button>
        <Button variant="contained" onClick={clickAll}>
          지금 구조 보기
        </Button>
      </div>
      <div
        className="ag-theme-balham"
        style={{
          height: "40vh",
          width: "60vw",
        }}
      >
        <AgGridReact
          rowData={rowData}
          ref={gridRef}
          columnDefs={columnDefs}
          rowSelection="multiple"
          rowMultiSelectWithClick={false}
          rowDragManaged={mode === "drag" ? true : false}
          animateRows={mode === "drag" ? true : false}
          onRowDragEnd={onRowDragEnd}
        ></AgGridReact>
      </div>
    </ContentWrapper>
  );
};

export default FirstIndex;
