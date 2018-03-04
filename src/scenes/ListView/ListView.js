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
  setAsDone: setTaskAsDone,
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

  render() {
    const { tasks, add, remove } = this.props;
    const { width } = Dimensions.get("window");
    return (
      <View style={styles.container}>
        <AddTask add={add} />

        <List
          style={styles.list}
          dataSource={this.ds.cloneWithRows(tasks)}
          renderRow={data => (
            <ListItem style={styles.listItem} key={data.id}>
              <Text
                style={styles.listText}
              >
                {data.name}
              </Text>
            </ListItem>
          )}
          renderLeftHiddenRow={data => (
            <TaskButton
              style={styles.taskButtonDone}
              onPress={() => setAsDone(data.id)}
              text="Done"
              icon="checkmark"
              success
            />
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
