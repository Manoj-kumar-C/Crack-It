// NavigationScreen.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SoundNaviScreen = ({ navigation }) => {
  const handleButton1Press = () => {
    navigation.navigate('Page1');
  };

  const handleButton2Press = () => {
    navigation.navigate('Page2');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleButton1Press}>
        <Text style={styles.buttonText}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleButton2Press}>
        <Text style={styles.buttonText}>Button 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#3498db',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SoundNaviScreen;
