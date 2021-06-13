import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import List from "./React-Native/List";
import ListInput from "./React-Native/ListInput";
import { useSelector } from "react-redux";
import { dataData } from "./features/dataSlice";

function App() {
  const dataList = useSelector(dataData);

  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <ListInput name={name} setName={setName} />
      </View>

      <View>
        <List data={dataList} />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12
  }
});
