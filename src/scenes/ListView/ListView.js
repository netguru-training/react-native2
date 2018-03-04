import React, { Component } from "react";
import { connect } from "react-redux";
import { List, ListItem, View, Text, Button } from "native-base";
import { ListView } from "react-native";
import AddTask from "./components/AddTask";

import { addTodo, removeTodo, setTaskAsDone, setTaskAsTodo } from "../../actions";

import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import TaskButton from "./components/TaskButton/TaskButton";

const mapStateToProps = state => ({
  tasks: state.tasks
});
const dispatchToProps = {
  add: addTodo,
  remove: removeTodo,
  setTaskAsDone: setTaskAsDone,
  setTaskAsTodo: setTaskAsTodo
};
class ListViewScene extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  previewTask = task => () => {
    const { navigation } = this.props;
    navigation.navigate("TodoDetails", task);
  }

  todoDoneStyles = (todo) => {
      return todo.status === 'done' ? { textDecorationLine: 'line-through' } : { };
  }

  getStatusButton = (todo, setTaskAsDone, setTaskAsTodo) => {
  		const setAsDone = (<TaskButton
                  onPress={() => setTaskAsDone(todo.id)}
                  text="Done"
                  icon="checkmark"
                  success
              />);
  		const setAsTodo = (<TaskButton
                  onPress={() => setTaskAsTodo(todo.id)}
                  text="Todo"
                  icon="arrow-round-back"
                  info
              />);
  		return todo.status === 'todo' ? setAsDone : setAsTodo;
  }

  render() {
    const { tasks, add, remove, setTaskAsDone, setTaskAsTodo } = this.props;
    return (
      <View style={styles.container}>
        <AddTask add={add} />

        <List
          style={styles.list}
          dataSource={this.ds.cloneWithRows(tasks)}
          renderRow={data => (
            <ListItem style={styles.listItem} key={data.id}>
              <Text
                style={[{ paddingTop: 10, paddingBottom: 10, color: "white" }, this.todoDoneStyles(data)]}
              >
                {data.name}
              </Text>
            </ListItem>
          )}
          renderLeftHiddenRow={data => (
		        this.getStatusButton(data, setTaskAsDone, setTaskAsTodo)
          )}
          renderRightHiddenRow={data => (
            <View
              style={{ margin: 0, padding: 0, flex: 1, flexDirection: "row" }}
            >
              <TaskButton
                style={{ flex: 1, borderRadius: 0 }}
                onPress={this.previewTask(data)}
                text="Preview"
                icon="search"
                title={data.name}
                info
              />
              <TaskButton
                style={{ flex: 1, borderRadius: 0 }}
                onPress={() => remove(data.id)}
                text="Delete"
                icon="trash"
                danger
              />
            </View>
          )}
          leftOpenValue={100}
          rightOpenValue={-232}
        />
      </View>
    );
  }
}
ListViewScene.navigationOptions = {
  title: "My tasks",
};
export default connect(mapStateToProps, dispatchToProps)(ListViewScene);
