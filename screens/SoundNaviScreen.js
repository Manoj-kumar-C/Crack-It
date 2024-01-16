// SoundNaviScreen.js
import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, FlatList } from 'react-native';

const SoundNaviScreen = ({ navigation }) => {
  const jsonData = [
    { id: 1, imageUrl: 'https://cdn-icons-png.flaticon.com/128/14096/14096130.png', buttonText: 'Animal Sounds', screenName: 'Page1' },
    { id: 2, imageUrl: 'https://cdn-icons-png.flaticon.com/128/14096/14096130.png', buttonText: 'Popular 100', screenName: 'Page2' },
    { id: 3, imageUrl: 'https://cdn-icons-png.flaticon.com/128/14096/14096130.png', buttonText: 'Movie Meme', screenName: 'Page2' },
    { id: 4, imageUrl: 'https://cdn-icons-png.flaticon.com/128/14096/14096130.png', buttonText: 'Other Memes', screenName: 'ComingSoon' },
    // Add more items as needed
  ];

  const handleButtonPress = (screenName) => {
    navigation.navigate(screenName);
  };

  const renderButton = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => handleButtonPress(item.screenName)}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.buttonImage} />
      <Text style={styles.buttonText}>{item.buttonText}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={jsonData}
      renderItem={renderButton}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2} // Two columns per row
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#3498db',
    alignItems: 'center',
    width: 150, // Adjust the width as needed
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
