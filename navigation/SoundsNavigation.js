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
import ComingSoonScreen from '../screens/comingsoon/ComingSoon';

const Stack = createStackNavigator();

const options = {
  // This is for disabling the header at the top unComment it during writing the main UI code
 
  headerShown: false
}


const SoundsNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SoundNaviScreen">
        <Stack.Screen options={options} name="SongScreen" component={SoundNaviScreen} />
        <Stack.Screen options={options} name="MemeScreen" component={TestScreen} />
        <Stack.Screen options={options} name="Page1" component={Page1} />
        <Stack.Screen options={options} name="Page2" component={Page2} />
        <Stack.Screen options={options} name="ComingSoon" component={ComingSoonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SoundsNavigation;
