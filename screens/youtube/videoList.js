import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import WebView from 'react-native-webview';

const VideoList = () => {
  const [videoId, setVideoId] = useState('can_5EOB7K8?si=1858WqoPxn-hAfZV'); // Default video ID
  const videoListData = [
    { id: '1', title: 'Video 1 - Tutorials', videoId: 'can_5EOB7K8?si=1858WqoPxn-hAfZV' },
    { id: '2', title: 'Video 2  - Scam uruttugals ', videoId: '4Dmc3NlhYgI?si=p9VPS8hj6XC36vMI' },
    // Add more video items as needed
  ];

  const playVideo = (selectedVideoId) => {
    setVideoId(selectedVideoId);
  };

  const renderWebView = () => {
    return (
      <WebView
        style={styles.webview}
        source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsFullscreenVideo={true}
        onShouldStartLoadWithRequest={(event) => {
          // Open links in the default browser
          if (!event.url.includes('youtube.com/embed')) {
            Linking.openURL(event.url);
            return false;
          }
          return true;
        }}
      />
    );
  };

  const renderVideoItem = ({ item }) => (
    <TouchableOpacity style={styles.videoItem} onPress={() => playVideo(item.videoId)}>
      <Text style={styles.videoTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>{renderWebView()}</View>
      <View style={styles.listContainer}>
        <FlatList
          data={videoListData}
          keyExtractor={(item) => item.id}
          renderItem={renderVideoItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    height: 250, // Adjust the height as needed
  },
  webview: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  videoItem: {
    width: '100%', // Take the full width of the container
    marginBottom: 10, // Adjust the margin as needed
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VideoList;
