// SupportScreen.js
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import login from '../../assets/auth/login.png';

const socialMediaData = [
  // { name: "Facebook", url: "https://www.facebook.com" },
  { name: "Twitter", url: "https://twitter.com/manoj_kumar__c" },
  { name: "Instagram", url: "https://www.instagram.com/manojkumar._.c/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/manojkumar--c/" },
  { name: "Youtube", url: "https://www.youtube.com/@Manojkumar_C/" }
];

const SupportScreen = () => {
  // Function to open a URL when a social media icon is pressed
  const openUrl = (url) => {
    Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
  };

  return (
    <View style={styles.container}>
      {/* Image at the top */}
      <Image
        source={login}
        style={styles.image}
      />

      {/* Social media icons */}
      <View style={styles.socialContainer}>
        {socialMediaData.map((socialMedia, index) => (
          <TouchableOpacity
            key={index}
            style={styles.iconContainer}
            onPress={() => openUrl(socialMedia.url)}
          >
            <Icon name={socialMedia.name.toLowerCase()} size={30} color="#000" />
          </TouchableOpacity>
        ))}
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
