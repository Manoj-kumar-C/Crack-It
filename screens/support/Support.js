// SupportScreen.js
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SupportScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://example.com/support-image.jpg' }}
        style={styles.image}
      />

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="facebook" size={30} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="twitter" size={30} color="#1da1f2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="instagram" size={30} color="#e4405f" />
        </TouchableOpacity>
        {/* Add more social icons as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  iconContainer: {
    marginHorizontal: 15,
  },
});

export default SupportScreen;
