import React, { useState } from "react";
import List from "./MainApp/List";
import ListInput from "./MainApp/ListInput";
import { useSelector } from "react-redux";
import { dataData } from "./MainApp/features/dataSlice";

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
