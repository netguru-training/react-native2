import React from "react";
import PropTypes from "prop-types";
import {View, Text, Icon, Button} from "native-base";
import styles from "./styles";

const TaskButton = ({ text, icon, onPress, ...args }) => {
  return (<Button
      style={styles.button}
      onPress={onPress}
      iconLeft
      {...args}
    >
      <Icon style={icon === "checkmark" ? styles.icon : null} name={icon} />
      <Text>
        {text}
      </Text>
    </Button>
  );
}

TaskButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default TaskButton;
