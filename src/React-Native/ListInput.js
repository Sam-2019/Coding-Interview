import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { adddata } from "../features/dataSlice";
import { useDispatch } from "react-redux";

function ListInput({ name, setName }) {
  const dispatch = useDispatch();

  function submit() {
    if (!name) {
      return;
    }
    const addData = {
      id: Math.random(),
      name
    };

    dispatch(adddata(addData));

    setName("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button title="Submit" onPress={submit} />
    </View>
  );
}

export default ListInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  input: {
    height: 40,
    borderWidth: 1
  }
});
