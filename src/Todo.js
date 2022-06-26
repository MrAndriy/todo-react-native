import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Todo = ({ todos, onRemove }) => {
  // {todos.map((todo) => (
  //     <View style={styles.todo} key={todo.id}>
  //       <Text style={styles.title}>{todo.title}</Text>
  //     </View>
  //   ))}

  return (
    <FlatList
      style={styles.flat}
      keyExtractor={(item) => item.id}
      data={todos}
      renderItem={({ item }) => (
        <TouchableOpacity onLongPress={() => onRemove(item.id)}>
          <View style={styles.todo}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default Todo;

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
});
