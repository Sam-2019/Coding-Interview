import React from "react";
import { View } from "react-native";
import { dataData } from "../features/dataSlice";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

function List() {
  const dataList = useSelector(dataData);

  if (dataList.length === 0) {
    return <View>No data</View>;
  }

  return (
    <View>
      {dataList.map((item, index) => (
        <ListItem key={index} text={item.name} id={item.id} />
      ))}
    </View>
  );
}

export default List;
