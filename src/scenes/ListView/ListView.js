import React, { Component } from "react";
import { connect } from "react-redux";
import { List, ListItem } from "native-base";
import SingleTask from "./components/SingleTask/SingleTask";

const mapStateToProps = state => ({
  tasks: state.tasks
});
const dispatchToProps = {};
class ListView extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <List
        style={{
          flex: 1,
          justifyContent: "space-around",
          flexDirection: "column"
        }}
      >
        {tasks.map(task => {
          return (
            <ListItem key={task.id}>
              <SingleTask text={task.name} />
            </ListItem>
          );
        })}
      </List>
    );
  }
}
export default connect(mapStateToProps, dispatchToProps)(ListView);
