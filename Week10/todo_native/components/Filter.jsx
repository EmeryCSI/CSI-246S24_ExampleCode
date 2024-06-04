import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function Filter({ setFilter }) {
  return (
    <View style={styles.container}>
      <Button onPress={() => setFilter("all")} title="All"></Button>
      <Button onPress={() => setFilter("pending")} title="Pending"></Button>
      <Button onPress={() => setFilter("completed")} title="Completed"></Button>
      <Button onPress={() => setFilter("cancelled")} title="Cancelled"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
