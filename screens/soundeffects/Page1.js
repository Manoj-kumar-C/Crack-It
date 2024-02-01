import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, StatusBar } from 'react-native';
import { Audio } from 'expo-av';

const Page1 = () => {
  const [songs, setSongs] = useState([]);
  const [sound, setSound] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://crack-it-backend.vercel.app/'); // Replace with your actual API endpoint
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

  const screenWidth = Dimensions.get('window').width;
  const buttonWidth = (screenWidth - 40) / 3; // Adjusted for three icons in a row

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {songs.map((song) => (
        <TouchableOpacity
          key={song.id}
          style={[styles.buttonContainer, { width: buttonWidth }]}
          onPress={() => playSong(song.audioFile)}
        >
          <View style={styles.shareIconContainer}>
            <Image source={require('../../assets/auth/signup.png')} style={styles.shareIcon} />
          </View>
          <View style={styles.buttonContent}>
            <Image source={require('../../assets/auth/signup.png')} style={styles.customIcon} />
            <Text style={styles.buttonText}>{song.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    marginBottom: 20,
    backgroundColor: '#EAEAEA', // Light Grey
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 10,
  },
  shareIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    // Add styling for share icon container if needed
  },
  buttonContent: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  customIcon: {
    marginBottom: 10,
    height: 20,
    width: 20,
    // Add styling for custom icon if needed
  },
  buttonText: {
    fontSize: 16,
    color: '#333', // Dark Grey
  },
});

export default Page1;
