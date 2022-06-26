import { useState } from 'react';
import { StyleSheet, Image, View, ScrollView } from 'react-native';
import Addtodo from './src/Addtodo';
import { Navbar } from './src/Navbar';
import { generateUUID } from './src/generateUUID';
import Todo from './src/Todo';

import logo from './assets/logo.png';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: generateUUID(10),
      title,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View>
      <Navbar title="Todo App" />
      <Image source={logo} style={{ width: 300, height: 300 }} />

      <View style={styles.container}>
        <Addtodo onSubmit={addTodo} />

        <Todo todos={todos} onRemove={removeTodo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});
