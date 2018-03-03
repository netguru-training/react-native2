import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, Button} from 'native-base';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducers from './src/reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default class App extends React.Component {
		render() {
				return (
						<Provider store={createStoreWithMiddleware(reducers)}>
								<View>
                  <Button>
                    <Text>Click Me! </Text>
                  </Button>
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
