import React from "react";
import { dataData } from "./features/dataSlice";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

function List() {
  const dataList = useSelector(dataData);

  return (
    <>
      {dataList.map((item, index) => (
        <ListItem key={index} text={item.name} id={item.id} />
      ))}
    </>
  );
}

export default List;
