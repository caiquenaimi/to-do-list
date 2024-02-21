import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TextInput
          placeholder="Digite uma nova tarefa"
          style={styles.input}
          onChangeText={setTask}
          value={task}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding : 50,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    border : "1px solid #000",
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
  
});
