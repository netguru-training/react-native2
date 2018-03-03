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
    this.props.add({ name: this.state.title });
    this.setState({ title: "" });
  };
  render() {
    return (
      <Form style={styles.Form}>
        <Item inlineLabel>
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
  Form: { flex: 1, justifyContent: "space-around", alignItems: "center" }
});
