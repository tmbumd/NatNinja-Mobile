import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ConfirmEmailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Please check your email to confirm your account.</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default ConfirmEmailScreen;
