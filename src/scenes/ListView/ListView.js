import React, { Component } from "react";
import { connect } from "react-redux";
import { List, ListItem, View, Text, Button } from "native-base";
import { ListView } from "react-native";
import AddTask from "./components/AddTask";

import { addTodo } from "../../actions";

import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import TaskButton from "./components/TaskButton/TaskButton";

const mapStateToProps = state => ({
  tasks: state.tasks
});
const dispatchToProps = {
  add: addTodo
};
class ListViewScene extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }
  render() {
    const { tasks, add } = this.props;
    return (
      <View style={styles.container}>
        <AddTask add={add} />
        <List
          style={styles.list}
          dataSource={this.ds.cloneWithRows(tasks)}
          renderRow={data => (
            <ListItem style={styles.listItem} key={data.id}>
              <Text>{data.name}</Text>
            </ListItem>
          )}
          renderLeftHiddenRow={data => (
            <TaskButton
              onPress={() => console.log("done")}
              text="Done"
              icon="checkmark"
              success
            />
          )}
          renderRightHiddenRow={data => (
            <Button
              style={{
                margin: 0,
                padding: 0
                // flex: 1,
                // flexDirection: "row",
                // justifyContent: "center",
                // alignItems: "center"
              }}
            >
              <TaskButton
                onPress={() => console.log("preview")}
                text="Preview"
                icon="search"
                info
              />
              <TaskButton
                onPress={() => console.log("delete")}
                text="Delete"
                icon="trash"
                danger
              />
            </Button>
          )}
          leftOpenValue={150}
          rightOpenValue={-150}
        />
      </View>
    );
  }
}
export default connect(mapStateToProps, dispatchToProps)(ListViewScene);
