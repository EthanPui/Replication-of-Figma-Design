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

// After clicking the ‘create my next event’ button, 
// the user should be directed to a new page where they can input their 
// event name, host name, start and end time/date, location and event photo. 
// Ensure there is a “next” button on the page. For this page, there is no Figma template to go off, 
