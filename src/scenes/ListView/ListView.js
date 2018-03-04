import React, { Component } from "react";
import { connect } from "react-redux";
import { List, ListItem, View, Text, Button } from "native-base";
import { ListView, Dimensions } from "react-native";
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
      return todo.status === 'done' ? { textDecorationLine: 'line-through' } : {};
  }

  getStatusButton = (todo, setTaskAsDone, setTaskAsTodo) => {
    const setAsDone = (<TaskButton
                style={styles.taskButtonDone}
                onPress={() => setTaskAsDone(todo.id)}
                text="Done"
                icon="checkmark"
                success
            />);
    const setAsTodo = (<TaskButton
                style={styles.taskButtonDone}
                onPress={() => setTaskAsTodo(todo.id)}
                text="Todo"
                icon="arrow-round-back"
                info
            />);
    return todo.status === 'todo' ? setAsDone : setAsTodo;
  }

  render() {
    const { tasks, add, remove, setTaskAsDone, setTaskAsTodo } = this.props;
    const { width } = Dimensions.get("window");
    const upcommingTasks = tasks.filter(t => t.status !== "done");
    const doneTasks = tasks.filter(t => t.status === "done");
    const hideEmptyListSpace = { maxHeight: upcommingTasks.length > 0 ? "100%" : 0 };

    return (
      <View style={styles.container}>
        <AddTask add={add} />
        {
          upcommingTasks.length > 0 &&
            <ListItem style={styles.itemHeaders} itemHeader first>
              <Text style={styles.itemHeadersText}>Upcomming tasks</Text>
            </ListItem>
        }
        <List
          style={[styles.list, hideEmptyListSpace]}
          dataSource={this.ds.cloneWithRows(upcommingTasks)}
          renderRow={data => (
            <ListItem style={styles.listItem} key={data.id}>
              <Text
                style={[styles.listText, this.todoDoneStyles(data)]}
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
              style={styles.rightHiddenRow}
            >
              <TaskButton
                style={styles.taskButton}
                onPress={this.previewTask(data)}
                text="Preview"
                icon="search"
                title={data.name}
                info
              />
              <TaskButton
                style={styles.taskButton}
                onPress={() => remove(data.id)}
                text="Delete"
                icon="trash"
                danger
              />
            </View>
          )}
          leftOpenValue={width / 3}
          rightOpenValue={-(width * 2 /3)}
        />
        {
          doneTasks.length > 0 &&
            <ListItem style={styles.itemHeaders} itemHeader first>
              <Text style={styles.itemHeadersText}>Done tasks</Text>
            </ListItem>
        }
        <List
          style={styles.list}
          dataSource={this.ds.cloneWithRows(doneTasks)}
          renderRow={data => (
            <ListItem style={styles.listItem} key={data.id}>
              <Text
                style={[styles.listText, this.todoDoneStyles(data)]}
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
              style={styles.rightHiddenRow}
            >
              <TaskButton
                style={styles.taskButton}
                onPress={this.previewTask(data)}
                text="Preview"
                icon="search"
                title={data.name}
                info
              />
              <TaskButton
                style={styles.taskButton}
                onPress={() => remove(data.id)}
                text="Delete"
                icon="trash"
                danger
              />
            </View>
          )}
          leftOpenValue={width / 3}
          rightOpenValue={-(width * 2 /3)}
        />
      </View>
    );
  }
}
ListViewScene.navigationOptions = {
  title: "My tasks",
  headerStyle: {
    backgroundColor: "#2096f3",
  },
  headerTitleStyle: {
    color: "#ffffff",
  },
};
export default connect(mapStateToProps, dispatchToProps)(ListViewScene);
