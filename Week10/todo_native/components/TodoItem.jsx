import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function TodoItem({ item, updateStatus, deleteItem }) {
  return (
    <View style={styles.container}>
      <Text style={styles.task}>
        {item.id} {item.task}
      </Text>
      <Text style={styles.status}>{item.status}</Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => updateStatus(item.id, "completed")}
          title="Complete"
        ></Button>
        <Button
          onPress={() => updateStatus(item.id, "cancelled")}
          title="Cancel"
        ></Button>
        <Button onPress={() => deleteItem(item.id)} title="Delete"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
