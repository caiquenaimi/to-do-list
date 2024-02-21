import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: Math.random().toString(), value: task }]);
      setTask("");
    } else {
      alert("Preencha o campo de tarefa!");
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    setTask(task.value);
    removeTask(taskId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TextInput
          placeholder="Digite uma nova tarefa"
          style={styles.input}
          onChangeText={setTask}
          value={task}
        />
        <TouchableOpacity style={styles.btn} onPress={addTask}>
          <Text style={styles.txt}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        {tasks.length === 0 ? (
          <Text style={styles.error}>Nenhuma Tarefa Cadastrada</Text>
        ) : (
          <Text style={styles.success}>Tarefas Cadastradas</Text>
        )}
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      {tasks.map((task) => (
        <View style={styles.boxBtn} key={task.id}>
          <Text style={styles.text1}>{task.value}</Text>
          <TouchableOpacity style={styles.removeBtn} onPress={() => removeTask(task.id)}>
            <Text style={styles.remove}>🗑</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editBtn} onPress={() => updateTask(task.id)}>
            <Text style={styles.edit}>🖊</Text>
          </TouchableOpacity>
        </View>
      ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: 200,
  },
  btn: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  txt: {
    color: "#fff",
  },
  title: {
    marginBottom: 20,
  },
  error: {
    color: "red",
    textAlign: "center",
    fontSize: 20,
  },
  success: {
    color: "green",
    textAlign: "center",
    fontSize: 20,
  },
  remove: {
    fontSize: 20,
  },
  scroll: {
    marginBottom: 20,
  },
  boxBtn: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  removeBtn: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  editBtn: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  edit: {
    fontSize: 20,
  },
  text1: {
    marginRight: "auto",
  },
});
