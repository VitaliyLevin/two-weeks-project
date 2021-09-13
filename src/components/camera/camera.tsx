import React from 'react';
import { RNCamera } from 'react-native-camera';

import { styles } from './camera.styles';

export const Camera = () => {
  return <RNCamera style={styles.preview} />;
};
