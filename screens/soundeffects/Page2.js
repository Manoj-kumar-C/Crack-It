import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, FlatList } from 'react-native';
import { Audio } from 'expo-av';

const Page2 = () => {
  const [songs, setSongs] = useState([]);
  const [sound, setSound] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://crack-it-backend.vercel.app/farts'); // Replace with your actual API endpoint
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Unload the sound when the component unmounts
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const playSong = async (audioFile) => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: audioFile },
      { shouldPlay: true }
    );

    setSound(newSound);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => playSong(item.audioFile)}
    >
      <View style={styles.shareIconContainer}>
        <Image source={require('../../assets/auth/signup.png')} style={styles.shareIcon} />
      </View>
      <View style={styles.buttonContent}>
        <Image source={require('../../assets/memes/others/fart.png')} style={styles.customIcon} />
        <Text style={styles.buttonText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <FlatList
        data={songs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatListContent: {
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: '#EAEAEA', // Light Grey
    borderRadius: 8,
    overflow: 'hidden',
  },
  shareIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    
  },
  buttonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  customIcon: {
    marginBottom: 10,
    height: 20,
    width: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#333', // Dark Grey
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default Page2;
