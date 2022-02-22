import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './components/Home';
import CreateEvent from './components/CreateEvent';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}} //Remove default header
        />
        <Stack.Screen
          name="CreateEvent"
          component={CreateEvent}
          options={{headerShown: false}} //Remove default header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

