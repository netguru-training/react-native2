import React from "react";
import { View, Text, Button } from "native-base";

const TodoDetails = ({ task, navigation }) => {
  const editTodo = task => () => navigation.navigate("EditTodo", task);
  return (
    <View>
      <Text>
        Preview
      </Text>
      <Button onPress={editTodo(task)}>
        <Text>
          Edit
        </Text>
      </Button>
    </View>
  );
}

export default TodoDetails;
