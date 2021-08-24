import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import New from '../layouts/New';
import Hot from '../layouts/Hot';
import Top from '../layouts/Top';
import Rising from '../layouts/Rising';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export const HeaderNav = () => {
  const { top } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#000',
      }}
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: '#ff1436'
        },
        style: {
          elevation: 0,
          backgroundColor: '#932433',
        },
        activeTintColor: '#fff'
      }}
      style={{ paddingTop: top }}
    >
      <Tab.Screen name="New" component={New} />
      <Tab.Screen name="Top" component={Top} />
      <Tab.Screen name="Rising" component={Rising} />
      <Tab.Screen name="Hot" component={Hot} />
    </Tab.Navigator>
  );
}