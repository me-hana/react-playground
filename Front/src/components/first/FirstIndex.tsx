import React, { useCallback, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const FirstIndex = () => {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ]);
  const gridRef = useRef<any>();

  const [columnDefs] = useState([
    // { field: "make", sortable: true, filter: true, checkboxSelection: true },
    { field: "make", rowDrag: true },
    { field: "model" },
    { field: "price" },
  ]);

  const onButtonClick = (e: any) => {
    const selectedNodes = gridRef.current?.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node: any) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node: any) => `${node.make} ${node.model}`)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  };

  const onRowDragEnd = useCallback((e) => {
    console.log("onRowDragEnd", e.node.data);
  }, []);

  return (
    <div className="ag-theme-balham" style={{ height: 400 }}>
      {/* <button onClick={onButtonClick}>Get selected rows</button> */}
      <AgGridReact
        rowData={rowData}
        // ref={gridRef}
        columnDefs={columnDefs}
        // rowSelection="multiple"
        // rowMultiSelectWithClick={false}
        rowDragManaged={true}
        animateRows={true}
        onRowDragEnd={onRowDragEnd}
      ></AgGridReact>
    </div>
  );
};

export default FirstIndex;
