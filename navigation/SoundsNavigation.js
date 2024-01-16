// AppNavigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import ButtonScreen from '../components/ButtonScreen';

import Page1 from '../screens/soundeffects/Page1';
import Page2 from '../screens/soundeffects/Page2';
import SongButton from '../components/SongButton';
import TestScreen from '../screens/TestScreen';
import SoundNaviScreen from '../screens/SoundNaviScreen';

const Stack = createStackNavigator();

const SoundsNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SoundNaviScreen">
        <Stack.Screen name="SongScreen" component={SoundNaviScreen} />
        <Stack.Screen name="MemeScreen" component={TestScreen} />
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SoundsNavigation;
