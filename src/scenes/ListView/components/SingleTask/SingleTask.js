import React from 'react';
import PropTypes from "prop-types";
import Swipeout from 'react-native-swipeout';
import {View, Text, Icon, Button} from "native-base"

import styles from "./styles";

import TaskButton from "../TaskButton/TaskButton";

const rightSwipeoutBtns = [
  {
    component: <TaskButton
      text="Edit"
      icon="create"
      onPress={() => console.log("edit")}
      infor
    />,
  },
  {
    component: <TaskButton
      text="Delete"
      icon="trash"
      onPress={() => console.log("delete")}
      danger
    />,
  }
];

const leftSwipeOutBtns = [
  {
    component: <TaskButton
      text="Done"
      icon="checkmark"
      onPress={() => console.log("check")}
      success
    />,
  }
];

const SingleTask = ({ text }) => (
  <Swipeout right={rightSwipeoutBtns} left={leftSwipeOutBtns} buttonWidth={100}>
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  </Swipeout>
);

SingleTask.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SingleTask;
