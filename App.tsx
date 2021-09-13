import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

function HomeScreen() {
  const isFocused = useIsFocused();
  console.log(isFocused);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {isFocused && <RNCamera style={styles.preview} />}
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
