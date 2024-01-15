// MainScreen.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import SongButton from '../components/SongButton'; // Adjust the path as per your file structure

const songs = [
  { id: 1, title: 'Song 1', audioFile: 'https://github.com/Manoj-kumar-C/Storage-of-Meme-App/releases/download/0.1/1.mp3' }, // Replace with actual audio files
  { id: 2, title: 'Song 2', audioFile: 'https://github.com/Manoj-kumar-C/Storage-of-Meme-App/releases/download/0.1/10.mp3' },
  { id: 3, title: 'Song 3', audioFile: 'song3.mp3' },
  { id: 4, title: 'Song 4', audioFile: 'song4.mp3' },
];

const TestScreen = () => {
  const playSong = async (audioFile) => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: audioFile },
      { shouldPlay: true }
    );
  };

  return (
    <View style={styles.container}>
      {songs.map((song) => (
        <SongButton
          key={song.id}
          title={song.title}
          onPress={() => playSong(song.audioFile)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    flexDirection: 'row',
    
  },
});

export default TestScreen;
