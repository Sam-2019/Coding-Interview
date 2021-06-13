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
    <View>
      <View style={styles.container}>
        <Text style={styles.textView}>{text}</Text>

        <Button style={styles.buttonView} title="Remove" onPress={remove} />
      </View>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  textView: {
    fontSize: 20,
    marginRight: 10
  },
  buttonView: {
    alignSelf: "flex-end"
  }
});
