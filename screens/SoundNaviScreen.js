import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, FlatList } from 'react-native';

const SoundNaviScreen = ({ navigation }) => {
  const jsonData = [
    { id: 1, imagePath: require('../assets/memes/MainScreen/fart.png'), buttonText: 'Fart Sounds', screenName: 'Page1' },
    { id: 2, imagePath: require('../assets/memes/MainScreen/bear.png'), buttonText: 'Animal Sounds', screenName: 'Page2' },
    { id: 3, imagePath: require('../assets/memes/MainScreen/fart.png'), buttonText: 'Movie Meme', screenName: 'Page3' },
    { id: 4, imagePath: require('../assets/memes/MainScreen/fart.png'), buttonText: 'Popular 100', screenName: 'Page3' },
    { id: 5, imagePath: require('../assets/memes/MainScreen/meme.png'), buttonText: 'Other Memes', screenName: 'ComingSoon' },
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
      <Image source={item.imagePath} style={styles.buttonImage} />
      <Text style={styles.buttonText}>{item.buttonText}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={jsonData}
        renderItem={renderButton}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Two columns per row
        style={styles.flatListContainer} // Use style instead of contentContainerStyle
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContainer: {
    padding: 0,
    backgroundColor: '#EAEAEA', // Light Grey
  },
  button: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#CCCCCC', // Grey
    alignItems: 'center',
    width: 150, // Adjust the width as needed
  },
  buttonText: {
    color: 'black',
    fontWeight:'bold',
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
