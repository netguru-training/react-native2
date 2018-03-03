import React from "react";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from "react-navigation";

import ListView from "../scenes/ListView/ListView";
import TodoDetails from "../scenes/TodoDetails/TodoDetails";
import EditTodo from "../scenes/EditTodo/EditTodo";
import { addListener } from "./redux";

export const AppNavigator = StackNavigator({
  ListView: { screen: ListView },
  TodoDetails: { screen: TodoDetails },
  EditTodo: { screen: EditTodo }
});

const mapStateToProps = state => ({
  nav: state.nav
});

class AppWithNavigationState extends React.Component {
  render() {
    const { dispatch, nav } = this.props;

    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener
        })}
      />
    );
  }
}

export default connect(mapStateToProps)(AppWithNavigationState);
