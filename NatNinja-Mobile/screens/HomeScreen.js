import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapComponent from '../components/MapComponent';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to NatureNinja</Text>
      <MapComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
