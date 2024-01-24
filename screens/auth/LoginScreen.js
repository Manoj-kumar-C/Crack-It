import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/login_image.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        inputStyle={styles.input}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        inputStyle={styles.input}
      />
      <Button
        title="Login"
        buttonStyle={styles.button}
        onPress={handleLogin}
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign Up here</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    marginTop: 10,
  },
  link: {
    marginTop: 20,
    color: 'blue',
  },
});

export default LoginScreen;
