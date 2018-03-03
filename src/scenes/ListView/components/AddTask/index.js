import React, {Component} from "react";
import { Container, Form, Item, Input, Label, Button, Text, Icon } from 'native-base';
import {StyleSheet} from 'react-native';

export default class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: ""
        };
      }
      render() {
          const { title } = this.state;
          return (
            <Form style={styles.Form}>
                <Item inlineLabel >
                <Input
                  placeholder='Todo title'
                  value={title}
                  onChangeText={title => this.setState({ title })}
                />
                <Button onPress={()=>this.props.add(title)} transparent>
                  <Text>Add </Text><Icon name="add"/>
                </Button>
                </Item>
            </Form>
          )
      }
    };
const styles = StyleSheet.create({
        Form: {flex: 1, justifyContent:"space-around", alignItems: "center"}
});
