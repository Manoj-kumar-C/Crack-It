import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Add your sign-up logic here
    console.log('Signing up with:', username, email, password);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/signup_image.png')} style={styles.logo} />
      <Text style={styles.title}>Sign Up</Text>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        inputStyle={styles.input}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        inputStyle={styles.input}
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        inputStyle={styles.input}
      />
      <Button
        title="Sign Up"
        buttonStyle={styles.button}
        onPress={handleSignUp}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login here</Text>
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

export default SignUpScreen;
