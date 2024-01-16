// SoundNaviScreen.js
import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const SoundNaviScreen = ({ navigation }) => {
  const jsonData = [
    { id: 1, imageUrl: 'https://cdn-icons-png.flaticon.com/128/14096/14096130.png', buttonText: 'First Memes', screenName: 'MemeScreen' },
    { id: 2, imageUrl: 'https://cdn-icons-png.flaticon.com/128/14096/14096130.png', buttonText: 'Second Memes', screenName: 'Page2' },
    // Add more items as needed
  ];

  const handleButtonPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      {jsonData.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.button}
          onPress={() => handleButtonPress(item.screenName)}
        >
          <Image source={{ uri: item.imageUrl }} style={styles.buttonImage} />
          <Text style={styles.buttonText}>{item.buttonText}</Text>
        </TouchableOpacity>
      ))}
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
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  buttonImage: {
    width: 50, // Set the width as needed
    height: 50, // Set the height as needed
    resizeMode: 'contain',
  },
});

export default SoundNaviScreen;
