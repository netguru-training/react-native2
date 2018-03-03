import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducers from './src/reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default class App extends React.Component {
		render() {
				return (
						<Provider store={createStoreWithMiddleware(reducers)}>
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
