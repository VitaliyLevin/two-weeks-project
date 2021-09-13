import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { Camera } from '../../components/camera';

export const CameraScreen = () => {
  const isFocused = useIsFocused();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {isFocused && <Camera />}
    </View>
  );
};
