import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './home';
import Other from './other';

const Drawer = createDrawerNavigator();

const Main = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} options={{ headerShown: true, headerStyle: { backgroundColor: '#50a341' } }} />
    <Drawer.Screen name="Other" component={Other} options={{ headerShown: true, headerStyle: { backgroundColor: '#50a341' } }} />
  </Drawer.Navigator>
);

export default Main;
