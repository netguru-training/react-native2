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
          <Button transparent onPress={() => this.handleAdd()}>
            <Text>Add </Text>
            <Icon name="add" />
          </Button>
        </Item>
      </Form>
    );
  }
}
const styles = StyleSheet.create({
  addForm: {
    flex: 0.1,
    maxHeight: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  addItem: {
    borderBottomWidth: 0,
  }
});
