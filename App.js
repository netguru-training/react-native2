import React from "react";
import { StyleSheet, AsyncStorage, AppState } from "react-native";
import { Text, View, Button } from "native-base";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./src/reducers";
import AppWithNavigationState from "./src/navigation/";

import { middleware as navMiddleware } from "./src/navigation/redux";

export default class App extends React.Component {
  state = {
    isLoading: true,
    store: createStore(
      reducers,
      composeWithDevTools(applyMiddleware(navMiddleware))
    ),
  };

  componentWillMount() {
    try {
      AppState.addEventListener('change', this._handleAppStateChange);
      AsyncStorage.getItem("savedStore", (err, result) => {
        console.log(result);
        if(result && result.length) {
          const initialStore = JSON.parse(result);
          this.setState({
            isLoading: false,
            store: createStore(reducers, initialStore, composeWithDevTools(applyMiddleware(navMiddleware)))
          });
        } else {
          this.setState({ isLoading: false });
        }
      });
    } catch(e) {
      this.setState({ isLoading: false });
    }
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = currentAppState => {
    const storingValue = JSON.stringify(this.state.store.getState())
    AsyncStorage.setItem('savedStore', storingValue);
  }

  render() {
    const { store, isLoading } = this.state;
    if (isLoading) return <Text>Is loading...</Text>;
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
