import React, { Component } from 'react';

import ItemList from './item-list';
import ShowItem from './show-item';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import reducer from './storage';
import { createStore } from 'redux';

export default class App extends Component {

    render() {

        const Stack = createStackNavigator();
        const store = createStore(reducer);

        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen
                            name="Home"
                            component={ItemList}
                            options={{
                                headerStyle: {
                                    backgroundColor: 'grey'
                                }
                            }} />
                        <Stack.Screen
                            name="Details"
                            component={ShowItem}
                            options={{
                                headerStyle: {
                                    backgroundColor: 'grey'
                                }
                            }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }

};