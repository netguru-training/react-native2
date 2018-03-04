import React, { Component } from "react";
import { connect } from "react-redux";
import {
  List,
  ListItem,
  View,
  Text,
  Button,
  Container,
  Form,
  Item,
  Input,
  Label,
  Toast
} from "native-base";
import { TextInput } from "react-native";
import { updateTodoDetails } from "../../actions/";

import styles from "./styles";

const mapStateToProps = state => ({
  task: state.tasks.find(
    el => el.id === state.nav.routes[state.nav.routes.length - 1].params.id
  )
});
const dispatchToProps = {
  edit: updateTodoDetails
};
class EditTodo extends Component {
  constructor(props) {
    super(props);
    const { task } = this.props;
    this.state = {
      desc: task.description,
      name: task.name,
      showToast: false,
    };
  }

  handleEdit = () => {
    const { params } = this.props.navigation.state;
    this.props.navigation.setParams({ ...params, name: this.state.name });
    this.props.edit({
      name: this.state.name,
      description: this.state.desc,
      id: params.id
    });
    Toast.show({
      text: 'Task successfully saved',
      position: 'bottom',
      type: 'success',
      buttonText: 'Okay',
    })
  };

  render() {
    return (
      <View>
        <Form style={styles.form}>
          <Item style={styles.input} floatingLabel>
            <Label>Title</Label>
            <Input
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
              style={styles.input}
              regular
            />
          </Item>
          <Label style={styles.labelDesc}>Description</Label>
          <Item
            style={styles.descBox}
            regular
            last
          >
            <Input
              style={styles.inputDesc}
              multiline={true}
              value={this.state.desc}
              onChangeText={desc => this.setState({ desc })}
              regular
            />
          </Item>
        </Form>
        <Button
          style={styles.button}
          onPress={() => this.handleEdit()}
        >
          <Text style={styles.buttonText}>
            Save
          </Text>
        </Button>
      </View>
    );
  }
}
EditTodo.navigationOptions = {
  headerTitle: "Edit todo",
};
export default connect(mapStateToProps, dispatchToProps)(EditTodo);
