import React, { useState } from "react";
import List from "./React-Native/List";
import ListInput from "./React-Native/ListInput";
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
