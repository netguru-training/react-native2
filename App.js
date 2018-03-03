import React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Button } from "native-base";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./src/reducers";
import ListView from "./src/scenes/ListView/ListView";
const store = createStore(reducers, composeWithDevTools(applyMiddleware()));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ListView />
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
