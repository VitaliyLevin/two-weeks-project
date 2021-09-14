import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { RNCamera } from 'react-native-camera';

import { styles } from './camera.styles';

export const Camera = () => {
  const isFocused = useIsFocused();
  return <>{isFocused && <RNCamera style={styles.preview} />}</>;
};
