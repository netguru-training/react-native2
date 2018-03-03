import React from "react";
import { View, Text, Button } from "native-base";

import styles from "./styles";

const TodoDetails = ({ navigation }) => {
  const { params } = navigation.state;
  const editTodo = task => () => navigation.navigate("EditTodo", task);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.description}>
          Description
        </Text>
      </View>
      <View style={styles.row}>
        <Button onPress={editTodo(params)} style={styles.button}>
          <Text style={styles.buttonText}>
            Edit
          </Text>
        </Button>
      </View>
    </View>
  );
}

TodoDetails.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.name}`,
});

export default TodoDetails;
