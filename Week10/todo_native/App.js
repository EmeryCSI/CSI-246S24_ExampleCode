import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";
import TodoItem from "./components/TodoItem";
import Filter from "./components/Filter";

const todos = [
  { id: 1, task: "Buy groceries", status: "pending" },
  { id: 2, task: "Finish homework", status: "completed" },
  { id: 3, task: "Call mom", status: "cancelled" },
  { id: 4, task: "Buy groceries", status: "pending" },
  { id: 5, task: "Finish homework", status: "completed" },
  { id: 6, task: "Call mom", status: "cancelled" },
  { id: 7, task: "Buy groceries", status: "pending" },
  { id: 8, task: "Finish homework", status: "completed" },
  { id: 9, task: "Call mom", status: "cancelled" },
];

export default function App() {
  const [todoItems, setTodoItems] = useState(todos);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");
  const filteredItems = todoItems.filter((item) => {
    if (filter === "all") {
      return true;
    }
    return item.status === filter;
  });

  // function that adds an item to the list
  const addTodo = () => {
    console.log(inputValue);
    if (!inputValue) {
      return;
    }
    const todo = {
      id: todoItems.length + 1,
      task: inputValue,
      status: "pending",
    };
    setTodoItems((prevTodos) => {
      return [...prevTodos, todo];
    });
    console.log(todo);
  };

  //lets make a functiion that takes in an id and a status
  const updateStatus = (id, status) => {
    //Go through todoItems, if the id matches return a new item with updated status
    //if it doesnt match just return the item
    setTodoItems(
      todoItems.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  //lets make a function that deletes
  const deleteItem = (id) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Lets make a banner  */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>To do list App</Text>
      </View>
      {/* Lets handle user input */}
      <View style={styles.inputContainer}>
        <TextInput
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          style={styles.inputText}
        ></TextInput>
        <Button onPress={addTodo} title="Add"></Button>
      </View>
      <Filter setFilter={setFilter}></Filter>
      <ScrollView>
        {filteredItems.map((item) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              updateStatus={updateStatus}
            ></TodoItem>
          );
        })}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    backgroundColor: "gray",
    padding: 15,
  },
  bannerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
  },
  inputText: {
    flex: 1,
    borderWidth: 1,
    borderColor: "blue",
    padding: 10,
  },
});
