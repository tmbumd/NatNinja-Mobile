import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConfirmEmailScreen = ({ route, navigation }) => {
  const { userId } = route.params;

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users/confirm/${userId}`);
        const data = await response.json();
        Alert.alert('Email Confirmation', data.message);
        navigation.navigate('Home');
      } catch (error) {
        console.error('Error:', error);
      }
    };
    confirmEmail();
  }, [userId]);

  return (
    <View style={styles.container}>
      <Text>Confirming your email...</Text>
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

export default ConfirmEmailScreen;
