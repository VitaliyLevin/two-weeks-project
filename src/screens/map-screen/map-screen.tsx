import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { Map } from '../../components/map';

const Tab = createBottomTabNavigator();

export const MapScreen = () => {
  return <Map />;
};
