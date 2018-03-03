import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from './src/reducers';

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware())
  );

export default class App extends React.Component {
		render() {
				return (
						<Provider store={store}>
								<View>
										<Text>joł joł team 2</Text>
								</View>
						</Provider>
				)
		}
}

const styles = StyleSheet.create({
		container: {
				flex: 1,
				backgroundColor: '#fff',
				alignItems: 'center',
				justifyContent: 'center',
		},
});
