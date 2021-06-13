import React, { useState } from "react";
import List from "./List";
import ListInput from "./ListInput";
import { useSelector } from "react-redux";
import { dataData } from "./features/dataSlice";

function App() {
  const dataList = useSelector(dataData);

  const [name, setName] = useState("");
  return (
    <>
      <ListInput name={name} setName={setName} />
      <List data={dataList} />
    </>
  );
}

export default App;
