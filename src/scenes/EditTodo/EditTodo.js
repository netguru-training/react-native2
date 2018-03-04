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
  Label
} from "native-base";
import { Dimensions, TextInput } from "react-native";
import { updateTodoDetails } from "../../actions/";

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
      name: task.name
    };
  }
  handleEdit = () => {
    const { params } = this.props.navigation.state;
    this.props.edit({
      name: this.state.name,
      description: this.state.desc,
      id: params.id
    });
  };

  render() {
    return (
      <View>
        <Form
          style={{
            height: 300
          }}
        >
          <Item floatingLabel>
            <Label>Title</Label>
            <Input
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />
          </Item>
          <Item
            floatingLabel
            regular
            last
            style={{
              height: 200,
              marginLeft: 12,
              marginRight: 10
            }}
          >
            <Label>Description</Label>
            <Input
              style={{
                height: 200
              }}
              multiline={true}
              value={this.state.desc}
              onChangeText={desc => this.setState({ desc })}
            />
          </Item>
        </Form>
        <Button
          style={{
            alignContent: "center",
            width: Dimensions.get("window").width
          }}
          onPress={() => this.handleEdit()}
        >
          <Text
            style={{
              textAlign: "center",
              width: Dimensions.get("window").width
            }}
          >
            Save
          </Text>
        </Button>
      </View>
    );
  }
}
EditTodo.navigationOptions = {
  title: "Edit todo"
};
export default connect(mapStateToProps, dispatchToProps)(EditTodo);
