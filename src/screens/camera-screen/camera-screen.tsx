import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { Camera } from '../../components/camera';

const Tab = createBottomTabNavigator();
export const CameraScreen = () => {
  return <Camera />;
};
