import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { CameraScreen } from '../camera-screen';
import { MapScreen } from '../map-screen';

const Tab = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
};
