import React from "react";
import { View, Text, Button } from "native-base";

const TodoDetails = ({ navigation }) => {
  const { params } = navigation.state;
  const editTodo = task => () => navigation.navigate("EditTodo", task);
  return (
    <View>
      <Text>Preview</Text>
      <Button onPress={editTodo(params)}>
        <Text>Edit {params.name}</Text>
      </Button>
    </View>
  );
};

export default TodoDetails;
