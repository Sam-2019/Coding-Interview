import React from "react";
import { dataData } from "./features/dataSlice";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

function List() {
  const dataList = useSelector(dataData);

  if (dataList.length === 0) {
    return <>No data</>;
  }

  return (
    <>
      {dataList.map((item, index) => (
        <ListItem key={index} text={item.name} id={item.id} />
      ))}
    </>
  );
}

export default List;
