import React, { Component } from "react";
import { connect } from "react-redux";
import { List, ListItem, View } from "native-base";
import SingleTask from "./components/SingleTask/SingleTask";
import AddTask from "./components/AddTask";

import styles from "./styles";

const mapStateToProps = state => ({
  tasks: state.tasks
});
const dispatchToProps = {};
class ListView extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <View style={styles.container}>
        <AddTask />
        <List
          style={styles.list}
        >
          {tasks.map(task => {
            return (
              <ListItem style={styles.listItem} key={task.id}>
                <SingleTask text={task.name} />
              </ListItem>
            );
          })}
        </List>
      </View>
    );
  }
}
export default connect(mapStateToProps, dispatchToProps)(ListView);
