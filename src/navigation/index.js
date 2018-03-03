import React from "react";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from "react-navigation";

import ListView from "../scenes/ListView/ListView";
import { addListener } from "./redux";

export const AppNavigator = StackNavigator({
  ListView: { screen: ListView }
  // TodoDetails: { screen: LoginContainer },
  // BuildingInfo: { screen: BuildingInfoContainer }
}, {
  headerMode: 'none',
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
