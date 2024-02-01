// WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const WelcomeScreen = () => {
  const slides = [
    {
      id: 1,
      title: 'Welcome to Your App',
      description: 'Discover amazing features and enjoy your experience.',
      image: require('../assets/auth/login.png'), // Replace with your image path
    },
    {
      id: 2,
      title: 'Explore the App',
      description: 'Find everything you need at your fingertips.',
      image: require('../assets/auth/login.png'), // Replace with your image path
    },
    // Add more slides as needed
  ];

  return (
    <Swiper style={styles.wrapper} showsButtons={false}>
      {slides.map((slide) => (
        <View key={slide.id} style={styles.slide}>
          <Image source={slide.image} style={styles.image} />
          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.description}>{slide.description}</Text>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200, // Adjust image size as needed
    height: 200, // Adjust image size as needed
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 40,
    marginTop: 10,
  },
});

export default WelcomeScreen;
