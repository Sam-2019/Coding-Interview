import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { removeData } from "../features/dataSlice";

function ListItem({ id, text }) {
  const dispatch = useDispatch();

  function remove() {
    dispatch(removeData(id));
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>

      <Button onClick={remove}>Delete</Button>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
