// TodoList.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const TodoList = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { key: Math.random().toString(), text }]);
      setText("");
    }
  };

  const handleDeleteTodo = (key) => {
    setTodos(todos.filter((todo) => todo.key !== key));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter todo"
          onChangeText={setText}
          value={text}
        />
        <TouchableOpacity onPress={handleAddTodo} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.list}
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.todoContainer}>
            <TouchableOpacity
              onPress={() => handleDeleteTodo(item.key)}
              style={styles.deleteButton}
            >
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.todoText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "#61dafb",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  list: {
    flex: 1,
  },
  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  deleteButton: {
    padding: 5,
    borderRadius: 50,
    backgroundColor: "#000",
    marginRight: 10,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  todoText: {
    flex: 1,
    fontSize: 16,
  },
});

export default TodoList;
