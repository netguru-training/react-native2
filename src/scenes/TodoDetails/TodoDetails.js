import React, { Component } from "react";
import { View, Text, Button } from "native-base";
import { connect } from "react-redux";

import styles from "./styles";

const getTask = (tasks, route) => {
  if (typeof route.params === "undefined") {
    return {};
  }
  return tasks.find(el => {
    return el.id === route.params.id;
  });
};
const mapStateToProps = state => ({
  task: getTask(state.tasks, state.nav.routes[state.nav.routes.length - 1])
});
const dispatchToProps = {};
class TodoDetails extends Component {
  render() {
    const { task, navigation } = this.props;
    const editTodo = task => () => navigation.navigate("EditTodo", task);
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          {task.description ? (
            <Text style={styles.description}>{task.description}</Text>
          ) : (
            <Text style={styles.description}>No description provided</Text>
          )}
        </View>
        <View style={styles.row}>
          <Button onPress={editTodo(task)} style={styles.button}>
            <Text style={styles.buttonText}>Edit</Text>
          </Button>
        </View>
      </View>
    );
  }
}

TodoDetails.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.name}`
});

export default connect(mapStateToProps, dispatchToProps)(TodoDetails);
