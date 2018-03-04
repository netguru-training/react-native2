import React, { Component } from "react";
import {
  Container,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Icon
} from "native-base";
import { StyleSheet } from "react-native";

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleAdd = () => {
    if (this.state.title.trim()) {
      this.props.add({ name: this.state.title });
    }
    this.setState({ title: "" });
  };
  render() {
    return (
      <Form style={styles.addForm}>
        <Item style={styles.addItem} inlineLabel>
          <Input
            placeholder="Todo title"
            value={this.state.title}
            onChangeText={title => this.setState({ title })}
          />
          <Button onPress={() => this.handleAdd()} style={styles.addButton} iconLeft>
            <Icon style={styles.addButtonIcon} name="add" />
            <Text style={styles.addButtonText}>Add </Text>
          </Button>
        </Item>
      </Form>
    );
  }
}
const styles = StyleSheet.create({
  addForm: {
    flex: 1,
    maxHeight: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  addItem: {
    borderBottomWidth: 0,
  },
  addButton: {
    backgroundColor: "#ffffff",
    borderRadius: 0,
    height: 50,
  },
  addButtonText: {
    color: "#2096f3",
  },
  addButtonIcon: {
    fontSize: 36,
    color: "#2096f3",
  }
});
