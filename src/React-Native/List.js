import React from "react";
import { View, FlatList, Text } from "react-native";
import { dataData } from "../features/dataSlice";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

function List() {
  const dataList = useSelector(dataData);

  if (dataList.length === 0) {
    return (
      <View>
        <Text>No data</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => <ListItem text={item.name} id={item.id} />;

  return (
    <View>
      <FlatList
        data={dataList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default List;
