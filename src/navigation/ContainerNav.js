import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderNav } from './HeaderNav'
import WebViewScreen from '../layouts/WebView/ExternalLink';


const Stack = createStackNavigator();

export const ContainerNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Reddit" component={HeaderNav} />
      <Stack.Screen name="HeaderNav" component={WebViewScreen} />
    </Stack.Navigator>
  );
}